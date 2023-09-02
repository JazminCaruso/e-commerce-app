import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
    orderItemContainer: {
        flex: 1,
        height: 120,
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
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 10,
        width: 320,
    },
    orderItemContainerTablet: {
        justifyContent: 'center',
        height: 170,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width: 270,
        margin: 10,
        padding: 20,
    },
    orderContainer: {
        flex: 1,
        alignItems: 'center',
    },
    orderItemDate: {
        fontFamily: FONTS.regular,
        fontSize: 16,
    },
    orderItemDateTablet: {
        fontFamily: FONTS.regular,
        fontSize: 20,
        marginBottom: 10,
    },
    orderItemId: {
        fontFamily: FONTS.regular,
        fontSize: 14,
        paddingVertical: 10,
    },
    orderItemIdTablet: {
        fontFamily: FONTS.regular,
        fontSize: 20,
    },
    orderItemTotal: {
        fontFamily: FONTS.bold,
        fontSize: 15,
    },
    orderItemTotalTablet: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        paddingVertical: 10,
    },
});
