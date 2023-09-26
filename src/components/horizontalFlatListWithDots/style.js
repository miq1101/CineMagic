import { StyleSheet } from 'react-native';
import { AppColors, GlobalStyles } from '../../theme';

import { DEVICE_SETTINGS } from '../../utils/constants';

const ratio = DEVICE_SETTINGS.screenWidth / 375;

const styles = StyleSheet.create({
    content: {
        paddingLeft: 0
    },
    imageContent: {
        marginRight: 8,
        borderRadius: 4,
        alignItems: GlobalStyles.center,
        width: DEVICE_SETTINGS.screenWidth,
        height: DEVICE_SETTINGS.screenHeight
    },
    image: {
        borderRadius: 4,
        width: DEVICE_SETTINGS.screenWidth,
        height: DEVICE_SETTINGS.screenHeight,
        backgroundColor: AppColors.appGray95
    },
    lastItemStyle: {
        marginRight: 48
    }
})

export { styles };