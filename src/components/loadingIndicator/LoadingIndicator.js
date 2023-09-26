import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './style';

import { AppColors } from '../../theme';

const defaultProps = {
    indicatorSize: 'large',
    color: AppColors.appBlack,
    style: styles.indicatorContainer
}

class LoadingIndicator extends React.Component {
    render() {
        const { indicatorSize, color, style } = this.props;
        return (
            <View style={style}>
                <ActivityIndicator
                    size={indicatorSize}
                    color={color}
                />
            </View>
        )
    }
}

export { LoadingIndicator };
LoadingIndicator.defaultProps = defaultProps;