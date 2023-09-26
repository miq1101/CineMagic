import { StyleSheet } from 'react-native'
import { AppColors, GlobalStyles } from '../../theme';

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        width: GlobalStyles.fullSize,
        alignItems: GlobalStyles.center,
        backgroundColor: AppColors.white,
        justifyContent: GlobalStyles.center
    }
})

export { styles };