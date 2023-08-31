import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes/themes";

export const styles = StyleSheet.create({
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    containerImage: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
    },
    imageProduct: {
        width: '50%',
        height: 300,
    },
    imageProductTablet: {
        width: '100%',
        height: 350,
    },
    textProduct: {
        fontSize: 22,
        fontFamily: FONTS.regular,
        textAlign: 'center',
        padding: 20,
    },
    textProductTablet: {
        fontSize: 28,
        fontFamily: FONTS.regular,
        textAlign: 'center',
        padding: 20,
    },
    textPrice: {
        fontSize: 18,
        fontFamily: FONTS.bold,
        textAlign: 'center',
        paddingBottom: 20,
    },
    textPriceTablet: {
        fontSize: 26,
        fontFamily: FONTS.bold,
        textAlign: 'center',
        paddingBottom: 20,
    },
    containerButton: {
        margin: 10,
        alignItems: 'center'
    },
    addFavButton: {
        width: '90%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },
    addCartButton: {
        width: '90%',
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCartText: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        color: COLORS.white,
    },
    addCartTextTablet: {
        fontFamily: FONTS.bold,
        fontSize: 28,
        color: COLORS.white,
    }
})
