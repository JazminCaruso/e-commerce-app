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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
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
    width: 280,
    margin: 10,
    padding: 20,
  },
  orderHeaderContainer: {
    flex: 1,
  },
  orderItemDate: {
      fontFamily: FONTS.regular,
      fontSize: 16,
      marginLeft: 30,
  },
  orderItemDateTablet: {
    fontFamily: FONTS.regular,
    fontSize: 20,
    marginBottom: 10,
  },
  orderBody: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginRight: 15,
      paddingVertical: 10,
  },
  orderBodyTablet: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  orderItemId: {
      fontFamily: FONTS.regular,
      fontSize: 14,
  },
  orderItemIdTablet: {
    fontFamily: FONTS.regular,
    fontSize: 20,
  },
  orderItemTotal: {
      fontFamily: FONTS.bold,
      fontSize: 15,
      paddingVertical: 10,
  },
  orderItemTotalTablet: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    paddingVertical: 10,
},
});
