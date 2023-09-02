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
    headerInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 15,
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    productsContainer: {
        gap: 10,
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    productsContainerTablet: {
        gap: 10,
        paddingVertical: 30,
        paddingHorizontal: 10,
        marginLeft: 30,
    },    
    productContainerTablet: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        width: '30%',
        marginHorizontal: 10,
    },
    productContainer: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        width: '45%',
        marginHorizontal: 10,
    },
    productImage: {
        width: '100%',
        height: 140,
    },
    productImageTablet: {
        width: '100%',
        height: 200,
    },
    productDetail: {
        padding: 5,
        justifyContent: 'center',
        gap: 5,
        backgroundColor: COLORS.white,
    },
    productName: {
        color: COLORS.primary,
        fontSize: 18,
        fontFamily: FONTS.regular,
    },
    productNameTablet: {
        color: COLORS.primary,
        fontSize: 24,
        fontFamily: FONTS.italic,
    },
    productPrice: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 14,
    },
    productPriceTablet: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 18,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {
        color: COLORS.primary,
        fontSize: 16,
    },
    notFoundTextTablet: {
        color: COLORS.primary,
        fontSize: 22,
    },
    clearIcon: {
        position:'absolute',
        zIndex: 2,
        right: 25,
        paddingTop:30,
    },
})
