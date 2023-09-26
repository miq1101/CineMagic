import React from 'react';
import { View } from 'react-native';

import { styles } from './style';

import { BottomTabBarItem } from './BottomTabBarItem';

import { BottomTabBarTexts } from '../../utils/constants';

class BottomTabBarComponent extends React.Component {
    render() {
        const bottomTabItems = {
            tapAction: this.tapAction
        }
        return (
            <View style={styles.content()}>
                <View
                    style={styles.bottomTabStyle}
                    options={{ animationEnabled: false }}
                >
                    <BottomTabBarItem
                        {...bottomTabItems}
                        activeTabType={BottomTabBarTexts.home}
                    />
                    <BottomTabBarItem
                        {...bottomTabItems}
                        activeTabType={BottomTabBarTexts.search}
                    />
                    <BottomTabBarItem
                        {...bottomTabItems}
                        activeTabType={BottomTabBarTexts.favorites}
                    />
                    <BottomTabBarItem
                        {...bottomTabItems}
                        activeTabType={BottomTabBarTexts.profile}
                    />
                </View>
            </View >
        )
    }

    // WILL_BE IMPROVED
    tapAction = (tab) => {
        const { navigation } = this.props;
        navigation.navigate(tab);
    }
}

export { BottomTabBarComponent };
