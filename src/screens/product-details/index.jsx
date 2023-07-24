import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";

function ProductDetails({ route }) {

    const { productId, categoryColor } = route.params;
    const products = useSelector((state) => state.products.data);
    const dispatch = useDispatch();
    const product = products.find((product) => product.id === productId);
    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <View style={styles.container}>
            <View style={[styles.containerImage, { backgroundColor: categoryColor }]}>
                <Image 
                    source={{ uri: product.image }} 
                    style={styles.imageProduct} 
                    resizeMode="cover"
                />
            </View>
            <Text style={[styles.textProduct, { backgroundColor: categoryColor }]}>{product.name}</Text>
            <Text style={[styles.textPrice, { backgroundColor: categoryColor }]}>Precio: ${product.price}</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={onAddToCart} style={styles.addCartButton}>
                    <Text style={styles.addCartText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetails;
