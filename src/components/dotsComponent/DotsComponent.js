import React from 'react';
import { View } from 'react-native';

import { styles } from './style';
import { generateUUID } from '../../utils/utils';

class DotsComponent extends React.Component {
    render() {
        const { dotsCount, currentIndex, containerStyle } = this.props;
        return (
            <View style={[styles.dotsContainer, containerStyle]}>
                {Array.apply({}, { length: dotsCount }).map((_, index) => {
                    return (
                        <View
                            key={generateUUID()}
                            style={styles.dot(currentIndex === index)}
                        />
                    )
                })}
            </View>
        );
    }
}

export { DotsComponent };