import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    headerInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 15,
        paddingTop: 30,
    },
    goBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    goBackText: {
        fontSize: 16,
        color: COLORS.primary,
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
        right: 5,
        paddingTop:30,
    },
    productsContainer: {
        gap: 10,
        paddingVertical: 30,
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
    },
    productName: {
        color: COLORS.primary,
        fontSize: 16,
    },
    productPrice: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
})
