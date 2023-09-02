import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTablet: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        paddingTop: 30,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    nameText: {
        fontFamily: FONTS.bold,
        fontSize: 17,
    },
    nameTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 22,
    },
    nameInput: {
        fontFamily: FONTS.regular,
        fontSize: 18,
    },
    nameInputTablet: {
        fontFamily: FONTS.regular,
        fontSize: 23,
    },
    buttonText: {
        fontFamily: FONTS.bold,
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        margin: 20,
    },
    buttonTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 23,
        textAlign: 'center',
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        margin: 20,
        width: 400,
    },
});
