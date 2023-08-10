import { View, Image, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { useGetProductByIdQuery } from "../../store/products/api";
import { COLORS } from "../../themes/colors";

function ProductDetails({ route }) {

    const { productId, categoryColor } = route.params;
    const { data, error, isLoading } = useGetProductByIdQuery(productId);
    const dispatch = useDispatch();
    const product = data?.find((product) => product.id === productId);
    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

    if (isLoading) return 
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />;
    </View>

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
            <Text style={[styles.textPrice, { backgroundColor: categoryColor }]}>Precio: {`${product.currency.symbol} ${product.price}`}</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={onAddToCart} style={styles.addCartButton}>
                    <Text style={styles.addCartText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetails;
