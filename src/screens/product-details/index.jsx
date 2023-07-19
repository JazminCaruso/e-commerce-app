import { View, Image, Text } from "react-native";
import PRODUCTS from '../../constants/data/products.json';
import { styles } from "./styles";

function ProductDetails({ navigation, route }) {

    const { productId, categoryColor } = route.params;

    const product = PRODUCTS.find((product) => product.id === productId)

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: product.image }} 
                style={styles.imageProduct} 
                resizeMode="cover"
            />
            <Text style={styles.textProduct}>{product.name}</Text>
        </View>
    )
}

export default ProductDetails;
