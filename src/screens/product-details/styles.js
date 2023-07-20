import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    imageProduct: {
        height: 600,
    },
    textProduct: {
        fontSize: 20,
        textAlign: 'center',
        margin: 24,
    }
})
