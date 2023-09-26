import React from 'react';
import { FlatList, View, TouchableOpacity, Image } from 'react-native';

import { styles } from './style';

import { DotsComponent } from '../dotsComponent/DotsComponent';

import { IMAGE_POSTER_URL } from '../../../config';

import withPreventDoubleClick from '../../../withPreventDoubleClick';
import { GlobalStyles } from '../../theme';
const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

class HorizontalFlatListWithDots extends React.Component {
    state = {
        loading: true,
        currentIndex: 0
    }

    render() {
        const { currentIndex } = this.state;
        const { imageStyle, onPressItem, showDots, horizontal = true, itemsList = [] } = this.props;
        const itemsListLength = itemsList.length;
        return (
            <View >
                <FlatList
                    keyExtractor={item => item.id}
                    data={itemsList}
                    loop
                    horizontal={horizontal}
                    pagingEnabled={true}
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    renderItem={({ item, index }) =>
                        this.renderItem(item, imageStyle, onPressItem, (itemsList.length - 1 === index))}
                />
                {showDots && itemsListLength > 1 &&
                    <DotsComponent
                        dotsCount={itemsListLength}
                        currentIndex={currentIndex}
                        containerStyle={styles.content}
                    />
                }
            </View>
        )
    }

    renderItem = (item, imageStyle, onPressItem, isLastIndex) => {
        const { id, backdrop_path } = item;
        return (
            <TouchableOpacityEx
                key={id}
                activeOpacity={0.8}
                onPress={() => onPressItem(id)}
            >
                <View
                    style={
                        [
                            imageStyle || styles.imageContent,
                            isLastIndex && styles.lastItemStyle,
                        ]
                    }
                >
                    {this.renderImage(backdrop_path, imageStyle)}

                </View>
            </TouchableOpacityEx>
        )
    }

    renderImage = (path, imageStyle) => (
        <>
            <Image
                source={{ uri: `${IMAGE_POSTER_URL}${path}` }}
                resizeMode={GlobalStyles.center}
                style={imageStyle || styles.image}
            />
        </>
    );


    onViewableItemsChanged = ({ viewableItems }) => this.setState({ currentIndex: viewableItems[0].index });
}

export { HorizontalFlatListWithDots };