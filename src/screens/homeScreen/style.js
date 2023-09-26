import { StyleSheet } from 'react-native';

import { AppColors, GlobalStyles } from '../../theme';
import { DEVICE_SETTINGS } from '../../utils/constants';

const ratio = DEVICE_SETTINGS.screenWidth / 375;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.appBlack,
    },
    content: {
        flex: 1,
        marginTop: DEVICE_SETTINGS.statusBarHeight,
    },
    ImageStyle: (width, height) => ({
        width: DEVICE_SETTINGS.screenWidth,
        height: DEVICE_SETTINGS.screenWidth * height / width,
    }),
    emptyContent: () => ({
        width: GlobalStyles.fullSize,
        height: DEVICE_SETTINGS.homeIndicatorHeight + 32
    }),
})

export { styles };