import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { styles } from './styles';

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory, style }) => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return (
        <TouchableHighlight
            onPress={() => onSelectCategory(id)}
            style={[styles.container, { backgroundColor }]}
            underlayColor={COLORS.background}
        >
            <ImageBackground
                source={{ uri: backgroundImage }}
                style={isTablet ? styles.imageBackgroundTablet : [styles.imageBackground, style]}
                resizeMode="contain"
            >
                <Text style={isTablet ? styles.categoryNameTablet : styles.categoryName}>
                    {name}
                </Text>
            </ImageBackground>
        </TouchableHighlight>
    );
};

export default CategoryItem;
