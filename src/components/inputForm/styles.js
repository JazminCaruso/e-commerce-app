import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../themes/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        height: 45,
        borderBottomColor: COLORS.tertiary,
        borderBottomWidth: 1,
        width: '90%',
    },
    errorContainer: {
        flex: 1,
        marginVertical: 5
    },
    errorText: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        paddingVertical: 5,
        color: COLORS.error,
    }
})
