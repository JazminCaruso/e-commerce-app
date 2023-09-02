import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    containerTablet: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emptyOrderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyOrderText: {
        fontSize: 18,
        fontFamily: FONTS.medium,
    },
    emptyOrderTextTablet: {
        fontSize: 26,
        fontFamily: FONTS.medium,
    },
});
