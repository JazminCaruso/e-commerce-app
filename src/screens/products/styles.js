import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../themes/themes";

export const styles = StyleSheet.create({
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
    listProducts: {
        flex: 1,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    notFoundText: {
        color: COLORS.primary,
        fontSize: 16,
        
    },
    clearIcon: {
        position:'absolute',
        zIndex: 2,
        right: 25,
        paddingTop:30,
    },
    productsContainer: {
        gap: 10,
        paddingVertical: 30,
        paddingHorizontal: 10,
        
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
    productDetail: {
        padding: 5,
        justifyContent: 'center',
        gap: 5,
        backgroundColor: COLORS.white,
    },
    productName: {
        color: COLORS.primary,
        fontSize: 20,
        fontFamily: FONTS.italic,
    },
    productPrice: {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 15,
    },
})
