import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { GlobalStyles } from '../../theme';

import { CircleImageComponent } from '../circleImageComponent/CircleImageComponent';

import withPreventDoubleClick from '../../../withPreventDoubleClick';
const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

class ActorsList extends React.Component {
    render() {
        const { data, title, onPressItem } = this.props;
        return (
            <View style={styles.container}>
                <Text style={[GlobalStyles.middleTitleStyle, styles.title]}>
                    {title}
                </Text>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    horizontal={true}
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => this.renderActorCircleView(item, onPressItem, index === data.length - 1)}
                />
            </View>
        );
    }

    renderActorCircleView = (item, onPressItem, isLastItem) => {
        const { id, name, title, profile_path } = item;
        return (
            <TouchableOpacityEx
                key={id}
                activeOpacity={0.8}
                onPress={() => onPressItem(id)}
            >
                <CircleImageComponent
                    name={name || title}
                    isLastItem={isLastItem}
                    imagePath={profile_path}
                />
            </TouchableOpacityEx>
        );
    }
}

export { ActorsList };