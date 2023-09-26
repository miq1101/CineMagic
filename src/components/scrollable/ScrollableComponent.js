import React from 'react';
import { ScrollView } from 'react-native';

class ScrollableComponent extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                {...this.props}
            >
                {children}
            </ScrollView>
        );
    }

}

export { ScrollableComponent };