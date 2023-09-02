import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        fontSize: 30,
        color: COLORS.text,
        textShadowColor: 'rgba(0,0,0,0.25)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 6,
        fontFamily: FONTS.italic,
    },
});
