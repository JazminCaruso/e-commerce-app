import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    containerImageText: {
        width: 320,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    containerImageTextTablet: {
        width: 800,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imageProduct: {
        width: '60%',
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
        margin: 20,
        alignItems: 'center',
    },
    addFavButton: {
        width: '90%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25,
    },
    addFavButtonTablet: {
        width: '90%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    addCartButton: {
        width: '90%',
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addCartButtonTablet: {
        width: '100%',
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
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
        paddingHorizontal: 40,
    },
});
