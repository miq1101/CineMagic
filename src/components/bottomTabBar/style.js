import { StyleSheet } from 'react-native';

import { AppColors, GlobalStyles } from '../../theme';
import { DEVICE_SETTINGS } from '../../utils/constants';

const styles = StyleSheet.create({
    content: () => ({
        backgroundColor: AppColors.appGraySky,
        paddingBottom: DEVICE_SETTINGS.homeIndicatorHeight
    }),
    bottomTabStyle: {
        height: 56,
        borderTopWidth: 0.5,
        borderTopColor: '#88888840',
        backgroundColor: AppColors.appBlack,
        flexDirection: GlobalStyles.flexRowDirection.flexDirection
    },
    buttonDefault: {
        alignItems: GlobalStyles.center,
        justifyContent: GlobalStyles.center,
        backgroundColor: AppColors.appGraySky,
        width: (DEVICE_SETTINGS.windowWidth) * 0.25
    },
})

export { styles };