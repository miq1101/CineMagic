import { StyleSheet } from 'react-native';

import { AppColors, GlobalStyles } from '../../theme';
import { DEVICE_SETTINGS } from '../../utils/constants';

const styles = StyleSheet.create({
    navBarStyle: () => ({
        ...GlobalStyles.flexRowDirection,
        height: 48,
        paddingHorizontal: 24,
        width: GlobalStyles.fullSize,
        marginTop: DEVICE_SETTINGS.statusBarHeight,
        justifyContent: 'space-between',
        backgroundColor: AppColors.appBlack,
        borderBottomWidth: 0.2,
        borderBottomColor: AppColors.secondaryDark
    }),
    backButton: {
        marginRight: 16
    },
    rightIcon: {
        marginLeft: 16
    },
    emptyContent: {
        width: 24,
        height: 24
    }
})

export { styles };