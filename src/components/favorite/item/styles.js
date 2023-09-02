import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 160,
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
        height: 180,
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
        width: 400,
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
        marginHorizontal: 30,
    },
    image: {
        width: 90,
        height: 120,
    },
    imageTablet: {
        width: 100,
        height: 150,
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
        width: 220,
    },
    price: {
        fontSize: 16,
        fontFamily: FONTS.bold,
    },
    priceTablet: {
        fontSize: 20,
        fontFamily: FONTS.bold,
    },
});
