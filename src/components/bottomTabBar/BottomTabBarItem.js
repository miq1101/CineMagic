import React from 'react';
import { TouchableOpacity } from 'react-native';

import { HomeIcon, SearchIcon, FavoriteIcon, SettingsIcon } from '../../assets/icons';

import { styles } from './style';
import { AppColors } from '../../theme';

import { BottomTabBarTexts } from '../../utils/constants';

import withPreventDoubleClick from '../../../withPreventDoubleClick';
const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

class BottomTabBarItem extends React.Component {
    render() {
        const { activeTabType, activeTabName, tapAction } = this.props;
        const isActiveTab = activeTabName === activeTabType;
        return (
            <TouchableOpacityEx
                activeOpacity={1}
                style={styles.buttonDefault}
                onPress={() => tapAction(activeTabType)}
            >

                {this.getFooterTabsItemIcon(activeTabType, isActiveTab)}
            </TouchableOpacityEx>
        );
    }

    // WILL_BE UPDATED IN THE FUTURE
    getFooterTabsItemIcon(tab, isActiveTab = false) {
        // const color = isActiveTab ? AppColors.primaryColor : AppColors.appBlack;
        const tabIcons = {
            [BottomTabBarTexts.home]: <HomeIcon />,
            [BottomTabBarTexts.search]: <SearchIcon />,
            [BottomTabBarTexts.favorites]: <FavoriteIcon />,
            [BottomTabBarTexts.profile]: <SettingsIcon />
        }
        return tabIcons[tab];
    }

}

export { BottomTabBarItem };