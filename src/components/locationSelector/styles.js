import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTablet: {
        alignItems: 'center',
    },
    preview: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 15,
        backgroundColor: COLORS.white,
    },
    previewTablet: {
        width: '100%',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 5,
        margin: 15,
        backgroundColor: COLORS.white,
    },
    text: {
        color: COLORS.primary,
        fontSize: 14,
        fontFamily: FONTS.medium,
    },
    textTablet: {
        color: COLORS.primary,
        fontSize: 22,
        fontFamily: FONTS.medium,
    },
    buttonText: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.white,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 23,
        textAlign: 'center',
        color: COLORS.white,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        margin: 20,
        width: 400,
    },
});
