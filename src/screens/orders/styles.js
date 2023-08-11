import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 10,
    }
});