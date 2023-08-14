import { StyleSheet } from "react-native";
import { COLORS, FONTS } from '../../themes/themes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 40,
    },
    label: {
        fontSize: 16,
        fontFamily: FONTS.medium,
        paddingVertical: 5,
        color: COLORS.text,
    },
    subLabel: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        paddingVertical: 5,
        color: COLORS.text,
    }
})
