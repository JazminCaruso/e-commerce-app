import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/themes"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: COLORS.primary,
        fontSize: 18,
        height: 40,
    },
});
