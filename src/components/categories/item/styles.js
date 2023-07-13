import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../themes/themes";

export const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    imageBackground:{
        width: '120%',
        height: 100,
        justifyContent: 'flex-end'
    },
    categoryName: {
        fontSize: 28,
        color: COLORS.text,
        padding: 20,
        textShadowColor: 'rgba(0,0,0,0.45)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 6,
        fontFamily:FONTS.bold,
    },
});
