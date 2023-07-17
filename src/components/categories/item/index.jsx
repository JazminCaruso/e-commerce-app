import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../../themes/colors";

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory, style}) => {
    const { width, height } = useWindowDimensions();
    const isTablet = (width >= 650) && (height > width);
    return (
        <TouchableHighlight 
            onPress={() => onSelectCategory(id)} 
            style={[styles.container, { backgroundColor }]}
            underlayColor={COLORS.background}>
            <ImageBackground 
                source={{ uri: backgroundImage }} 
                style={ isTablet ? styles.imageBackgroundTablet : [styles.imageBackground, style]}
                resizeMode="contain">
                <Text style={ isTablet ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default CategoryItem;
