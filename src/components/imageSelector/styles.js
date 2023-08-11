import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";

export const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    image: {
        width: 100,
        height: 100,
    },
})
