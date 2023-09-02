import { StyleSheet } from 'react-native';
import { FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
    listContainer: {
        margin: 10,
    },
    emptyFavsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyFavsText: {
        fontSize: 18,
        fontFamily: FONTS.medium,
    },
    emptyFavsTextTablet: {
        fontSize: 26,
        fontFamily: FONTS.medium,
    },
});
