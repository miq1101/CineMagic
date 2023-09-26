import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { BackWhite} from '../../assets/icons';

import { styles } from './style';
import { GlobalStyles } from '../../theme';

import withPreventDoubleClick from '../../../withPreventDoubleClick';
const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

class SimpleNavBarComponent extends React.Component {
    render() {
        const { leftIcon, clickOnLeftIcon, title, titleStyle, rightIcon, clickOnRightIcon, showLeftIcon = true } = this.props;
        return (
            <View style={styles.navBarStyle()}>
                {showLeftIcon
                    ? <TouchableOpacityEx
                        onPress={clickOnLeftIcon}
                        style={styles.backButton}
                    >
                        {leftIcon || <BackWhite />}
                    </TouchableOpacityEx>
                    : <View style={styles.emptyContent} />
                }
                {title &&
                    <Text
                        numberOfLines={2}
                        style={GlobalStyles.navBarTitleStyle}
                    >
                        {title}
                    </Text>
                }
                {rightIcon
                    ? <TouchableOpacityEx
                        onPress={clickOnRightIcon}
                        style={titleStyle || styles.rightIcon}
                    >
                        {rightIcon}
                    </TouchableOpacityEx>
                    : <View style={styles.emptyContent} />
                }
            </View>
        );
    }

}

export { SimpleNavBarComponent };