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
    textProduct: {
        fontSize: 22,
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
    containerButton: {
        margin: 10,
    },
    addCartButton: {
        width: '100%',
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCartText: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        
        color: COLORS.white,
    }
})
