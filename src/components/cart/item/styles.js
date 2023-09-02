import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 220,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 7,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
    },
    containerTablet: {
        flex: 1,
        flexDirection: 'row',
        height: 230,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 5,
    },
    imageContainer: {
        maxWidth: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        borderRadius: 5,
        marginHorizontal: 25,
    },
    imageContainerTablet: {
        maxWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        borderRadius: 5,
        marginHorizontal: 60,
    },
    image: {
        width: 100,
        height: 150,
    },
    imageTablet: {
        width: 200,
        height: 200,
    },
    detailContainer: {
        maxWidth: 180,
        gap: 5,
    },
    detailContainerTablet: {
        maxWidth: 480,
        gap: 5,
    },
    name: {
        fontSize: 17,
        fontFamily: FONTS.regular,
    },
    nameTablet: {
        fontSize: 22,
        fontFamily: FONTS.regular,
    },
    price: {
        fontSize: 16,
        fontFamily: FONTS.bold,
    },
    priceTablet: {
        fontSize: 20,
        fontFamily: FONTS.bold,
    },
    qty: {
        fontSize: 15,
        fontFamily: FONTS.regular,
    },
    qtyTablet: {
        fontSize: 21,
        fontFamily: FONTS.regular,
    },
    actionContainer: {
        gap: 20,
        flexDirection: 'row',
        marginTop: 10,
    },
    actionContainerTablet: {
        gap: 30,
        flexDirection: 'row',
        marginTop: 10,
    },
    increaseButton: {
        width: 35,
        height: 35,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 20,
    },
    increaseButtonTablet: {
        width: 40,
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 20,
    },
    decreaseButton: {
        width: 35,
        height: 35,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
    },
    decreaseButtonTablet: {
        width: 40,
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
    },
    buttonText: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: 24,
    },
    buttonTextTablet: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: 24,
    },
    deleteButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 20,
    },
    deleteButtonTablet: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        borderRadius: 20,
    },
});
