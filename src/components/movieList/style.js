import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { DEVICE_SETTINGS } from '../../utils/constants';
import { AppColors, FontWeights, GlobalStyles } from '../../theme';

const IMAGE_WIDTH = DEVICE_SETTINGS.screenWidth / 2.25;
const styles = StyleSheet.create({
    container: {
        marginTop: 24
    },
    content: {
        marginTop: 16,
        paddingLeft: 12,
        flexDirection: GlobalStyles.flexRowDirection.flexDirection
    },
    title: {
        paddingHorizontal: 16
    },
    itemContent: (width, height) => ({
        borderRadius: 10,
        marginHorizontal: 4,
        width: IMAGE_WIDTH,
        height: (IMAGE_WIDTH * height) / width
    }),
    nameStyle: {
        marginTop: 8,
        marginLeft: 8,
        width: IMAGE_WIDTH,
        fontSize: RFValue(13),
        color: AppColors.appGraySky,
        fontWeight: FontWeights.fontWeightMedium
    }
})

export { styles };