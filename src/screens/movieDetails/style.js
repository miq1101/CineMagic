import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

import { DEVICE_SETTINGS } from '../../utils/constants';
import { AppColors, FontWeights, GlobalStyles } from '../../theme';

const TITLE_IMAGE_WIDTH = DEVICE_SETTINGS.screenWidth / 2.5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.appBlack
    },
    content: {
        flex: 1,
        marginHorizontal: 16,
    },
    topContent: {
        flex: 1,
        marginTop: 16,
        justifyContent: 'space-between',
        flexDirection: GlobalStyles.flexRowDirection.flexDirection
    },
    titleImage: (width, height) => ({
        borderRadius: 12,
        width: TITLE_IMAGE_WIDTH,
        height: TITLE_IMAGE_WIDTH * height / width
    }),
    topCenterContent: {
        flex: 1,
        marginLeft: 16
    },
    middleTitle: {
        fontSize: RFValue(16),
        color: AppColors.appGraySky,
        fontWeight: FontWeights.fontWeightSemibold
    },
    middleDescription: {
        marginBottom: 16,
        fontSize: RFValue(12),
        color: AppColors.white,
        fontWeight: FontWeights.fontWeightMedium
    },
    centerContent: {
        flex: 1,
        marginTop: 16
    },
    genreContainer: {
        flex: 1,
        marginTop: 8,
        flexDirection: GlobalStyles.flexRowDirection.flexDirection
    },
    genreItem: {
        marginRight: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: AppColors.skyDark,
        alignItems: GlobalStyles.center,
        justifyContent: GlobalStyles.center,
        backgroundColor: AppColors.appGrayDark
    },
    videoContent: {
        height: 180,
        width: '100%',
        marginTop: 16,
        borderRadius: 16,
        alignItems: GlobalStyles.center,
        justifyContent: GlobalStyles.center,
        backgroundColor: AppColors.darkBlack
    },
    emptyContent: {
        height: 50,
        width: DEVICE_SETTINGS.windowWidth
    }
})

export { styles };