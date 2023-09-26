import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { AppColors, FontWeights, GlobalStyles } from '../../theme';

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 16,
    },
    actorIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 4
    },
    lastItemStyle: {
        marginRight: 28
    },
    trendingPeopleName: {
        width: 60,
        marginTop: 4,
        fontSize: RFValue(12),
        color: AppColors.appGraySky,
        textAlign: GlobalStyles.center,
        fontWeight: FontWeights.fontWeightMedium,
    },
})

export { styles };