import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    listContainer: {
        flex: 1,
        marginVertical: 10,
    },
    footerContainer: {
        backgroundColor: COLORS.primary,
        borderTopColor: COLORS.white,
        borderTopWidth: 4,
        padding: 15,
        borderRadius: 5,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 15,
    },
    checkoutButton: {
        alignItems: 'center',
    },
    totalText: {
        fontFamily: FONTS.medium,
        fontSize: 18,
    },
    totalTextTablet: {
        fontFamily: FONTS.medium,
        fontSize: 24,
    },
    checkoutText: {
        fontFamily: FONTS.bold,
        fontSize: 18,
    },
    checkoutTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 26,
    },
    priceText: {
        fontFamily: FONTS.bold,
        fontSize: 16,
    },
    priceTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 23,
    },
    emptyCartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        fontSize: 18,
        fontFamily: FONTS.medium,
    },
    emptyCartTextTablet: {
        fontSize: 26,
        fontFamily: FONTS.medium,
    }
});
