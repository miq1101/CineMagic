import { StyleSheet } from 'react-native';

import { GlobalStyles } from '../../theme';

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
})

export { styles };