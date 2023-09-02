import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 20,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 15,
    },
    footerContainer: {
        backgroundColor: COLORS.primary,
        borderTopColor: COLORS.white,
        borderTopWidth: 4,
        padding: 15,
        borderRadius: 5,
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
    },
    modalContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        paddingVertical: 20,
    },
    resumenText: {
        fontFamily: FONTS.bold,
        fontSize: 18,
    },
    resumenTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 22,
    },
    dataResumenText: {
        fontFamily: FONTS.regular,
        fontSize: 16,
    },
    dataResumenTextTablet: {
        fontFamily: FONTS.regular,
        fontSize: 20,
    },
    emailResumenText: {
        fontFamily: FONTS.regular,
        fontSize: 16,
        margin: 20,
        textAlign: 'center'
    },
    emailResumenTextTablet: {
        fontFamily: FONTS.regular,
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    modalButtonContainer: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    modalButtonConfirm: {
        margin: 20,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
    },
    modalButtonCancel: {
        margin: 20,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: FONTS.bold,
        fontSize: 18,
    },
    buttonTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 22,
    },
    buttonTextCancel: {
        fontFamily: FONTS.regular,
        fontSize: 18,
    },
    buttonTextCancelTablet: {
        fontFamily: FONTS.regular,
        fontSize: 22,
    },
    explorarText: {
        fontFamily: FONTS.regular,
        fontSize: 18,
        color: COLORS.white,
    },
    explorarTextTablet: {
        fontFamily: FONTS.regular,
        fontSize: 26,
        color: COLORS.white,
    },
});
