import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addresListContainer: {
        flex: 1,
        marginVertical: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderRadius: 10,
        elevation: 3,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImageContainer: {
        backgroundColor: COLORS.primary,
    },
    mapImage: {
        width: 80,
        height: 80,
    },
    mapImageTablet: {
        width: 250,
        height: 150,
    },
    itemDetailsContainer: {
        flex: 1,
        gap: 10,
    },
    itemDetailsContainerTablet: {
        flex: 1,
        gap: 10,
        marginHorizontal: 20,
    },
    itemAddress: {
        fontFamily: FONTS.medium,
        fontSize: 14,
    },
    itemAddressTablet: {
        fontFamily: FONTS.medium,
        fontSize: 20,
    },
    itemCoords: {
        fontFamily: FONTS.medium,
        fontSize: 12,
    },
    itemCoordsTablet: {
        fontFamily: FONTS.medium,
        fontSize: 18,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 45,
        height: 45,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    floatingButtonTablet: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 45,
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    floatingButtonTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
    },
    floatingButtonText: {
        fontSize: 25,
        fontFamily: FONTS.medium,
        color: COLORS.white,
    },
    floatingButtonTextTablet: {
        fontSize: 36,
        fontFamily: FONTS.medium,
        color: COLORS.white,
    },
});
