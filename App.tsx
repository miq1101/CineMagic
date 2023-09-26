import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';
import { RFValue } from 'react-native-responsive-fontsize';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthNavigator from './src/navigation/AuthNavigator';
import { LoadingIndicator } from './src/components/loadingIndicator/LoadingIndicator';

import { InfoIcon } from './src/assets/icons';

import { AppColors, GlobalStyles } from './src/theme';

import { setLanguage } from './src/utils/languageUtils';
import { AsyncStorageKeys } from './src/utils/constants';
import { getAsyncStorageParsedData } from './src/utils/utils';
import { currentRouteName, navigationRef } from './navigation';
import { getData, overwriteData } from './src/utils/asyncStorageManager';

import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

const Stack = createStackNavigator()

class App extends React.Component {
  state = {
    loading: true,
    signedIn: false
  }

  _isNotMounted = true;
  isNetworkConnected = false;
  unsubscribe = null;

  async componentDidMount() {
    await setLanguage();
    // this.addListenerToConnection();  // WILL_BE implemented in the future
    this.initData();
  }

  // WILL_BE implemented in the future
  // componentWillUnmount() {
  //   if (this.unsubscribe != null) this.unsubscribe();
  // }

  // WILL_BE implemented in the future
  // addListenerToConnection = () => {
  //   this.unsubscribe = NetInfo.addEventListener(async state => {
  //     const currentSceneName = currentRouteName();
  //     if (state.isConnected && state.isInternetReachable) {
  //       if (!this.isNetworkConnected && !this._isNotMounted) {
  //         // navigationRefReset(currentSceneName);
  //       }
  //       this.isNetworkConnected = true;
  //       this._isNotMounted = false;
  //     } else if (this.isNetworkConnected) {
  //       this.isNetworkConnected = false;
  //       this.showNoNetworkConnectionMessage();
  //     } else if (!state.isConnected && this._isNotMounted) {
  //       this.showNoNetworkConnectionMessageFromLaunchOfflineState();
  //     }
  //   });
  // }

  render() {
    const { loading, signedIn } = this.state;
    return (
      <SafeAreaProvider >
        <NavigationContainer ref={navigationRef}>
          {this.renderContent(loading, signedIn)}
          <FlashMessage
            position="top"
            renderFlashMessageIcon={() => <InfoIcon />}
          />
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }

  renderContent = (loading: boolean, signedIn: boolean) => {
    if (loading) return <LoadingIndicator />;
    return <AuthNavigator signedIn={true} />;
  }

  showNoNetworkConnectionMessage = () => {
    showMessage({
      message: 'No internet connection',
      type: "danger",
      backgroundColor: AppColors.white,
      color: AppColors.black,
      icon: {
        icon: "danger",
        position: "left",
        props: {}
      },
      titleStyle: styles.noConnectionTitle,
      style: styles.noConnectionContent,
      duration: 7000,
      autoHide: false,
      hideOnPress: true
    })
  }

  // WILL_BE implemented in the future
  // showNoNetworkConnectionMessageFromLaunchOfflineState = () => {
  //   setTimeout(() => {
  //     NetInfo.fetch().then(state => {
  //       if (!state.isConnected && !state.isInternetReachable) {
  //         this.showNoNetworkConnectionMessage();
  //         this._isNotMounted = false;
  //       }
  //     })
  //   }, 500)
  // }


  initData = async () => {
    const userData = await getAsyncStorageParsedData(AsyncStorageKeys.user);
    this.setState({ loading: false, signedIn: !!userData });
  }

}

const styles = StyleSheet.create({
  noConnectionTitle: {
    marginLeft: 16,
    fontSize: RFValue(14),
    color: AppColors.black
  },
  noConnectionContent: {
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: AppColors.appGray
  },
  notificationContent: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 8,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.05,
    shadowColor: AppColors.white,
    backgroundColor: AppColors.appGrayLighter,
  },
});

export default App;
