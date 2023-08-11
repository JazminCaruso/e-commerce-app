import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,
        marginVertical: 15,
        backgroundColor: COLORS.white,
    },
    text: {
        color: COLORS.primary,
        fontSize: 14,
        fontFamily: FONTS.medium,
    },
    location: {
        color: COLORS.primary,
        fontSize: 14,
        fontFamily: FONTS.bold,
    }
})
