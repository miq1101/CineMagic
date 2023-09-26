import { StyleSheet } from 'react-native';

import { AppColors, GlobalStyles } from '../../theme';

const styles = StyleSheet.create({
    dotsContainer: {
        height: 10,
        marginTop: 16,
        justifyContent: GlobalStyles.center,
        flexDirection: GlobalStyles.flexRowDirection.flexDirection
    },
    dot: (currentDot) => ({
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        backgroundColor: currentDot ? AppColors.appGrayDark : AppColors.white
    }),
})

export { styles };