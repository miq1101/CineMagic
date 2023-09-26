import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { t } from '../../locales';

import { styles } from './style';

import { LanguageNSKeys } from '../../utils/constants';

import withPreventDoubleClick from '../../../withPreventDoubleClick';
const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

class WrongData extends React.Component {
    render() {
        const { contentObject = t('noConnection', LanguageNSKeys.wrongData), buttonClick, wrongDataContent, contentStyle = {} } = this.props;
        const { wrongDataContentTitle, wrongDataContentDescription, wrongDataContentButtonText } = contentObject;
        return (
            <View style={[styles.wrongDataContent, contentStyle]}>
                <Text style={styles.wrongDataContentTitle}>
                    {wrongDataContentTitle}
                </Text>
                <Text style={styles.wrongDataContentDescription}>
                    {wrongDataContentDescription}
                </Text>
                {!wrongDataContent &&
                    <TouchableOpacityEx
                        style={styles.wrongDataContentButtonContent}
                        onPress={buttonClick}
                    >
                        <Text style={styles.wrongDataContentButtonText}>
                            {wrongDataContentButtonText}
                        </Text>
                    </TouchableOpacityEx>
                }
            </View>
        );
    }
};

export default WrongData;