import React from 'react';
import { Image, Text } from 'react-native';

import { styles } from './style';
import { GlobalStyles } from '../../theme';

import { IMAGE_POSTER_URL } from '../../../config';

class CircleImageComponent extends React.Component {
    render() {
        const { imagePath, name, nameStyle, contentStyle, numberOfLines = 3, isLastItem = false, resizeMode = GlobalStyles.center } = this.props;
        return (
            <>
                <Image
                    source={{ uri: `${IMAGE_POSTER_URL}${imagePath}` }}
                    style={[
                        contentStyle || styles.actorIcon,
                        isLastItem && styles.lastItemStyle
                    ]}
                    resizeMode={resizeMode}
                />
                {name &&
                    <Text
                        numberOfLines={numberOfLines}
                        style={nameStyle || styles.trendingPeopleName}
                    >
                        {name}
                    </Text>
                }
            </>
        );
    }
}

export { CircleImageComponent };