import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { AppColors, FontWeights, GlobalStyles } from '../../theme';

const styles = StyleSheet.create({
    wrongDataContent: {
        paddingHorizontal: 16,
        alignItems: GlobalStyles.center,
        justifyContent: GlobalStyles.center
    },
    wrongDataContentTitle: {
        fontSize: RFValue(20),
        color: AppColors.appBlack,
        textAlign: GlobalStyles.center,
        fontWeight: FontWeights.fontWeightSemibold
    },
    wrongDataContentDescription: {
        marginTop: 16,
        fontSize: RFValue(14),
        color: AppColors.appBlack,
        textAlign: GlobalStyles.center,
        fontWeight: FontWeights.fontWeightMedium
    },
    wrongDataContentButtonContent: {
        marginTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: RFValue(12),
        borderColor: AppColors.appBlack
    },
    wrongDataContentButtonText: {
        fontSize: RFValue(16),
        color: AppColors.appBlack,
        fontWeight: FontWeights.fontWeightSemibold
    }
})

export { styles };