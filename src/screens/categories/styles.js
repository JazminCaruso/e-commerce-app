import { StyleSheet } from "react-native";
import { COLORS } from '../../themes/themes'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    listContainer: {
      margin: 15,
    },
    itemContainer: {
      gap: 10,
    },
    categoryItemLandscape: {
      height: 20,
    },
  });

