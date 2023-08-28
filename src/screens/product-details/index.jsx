import { View, Image, Text, TouchableOpacity, ActivityIndicator, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { useGetProductByIdQuery } from "../../store/products/api";
import { COLORS } from "../../themes/colors";

function ProductDetails({ route }) {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

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
                    style={isTablet ? styles.imageProductTablet : styles.imageProduct} 
                    resizeMode={isTablet ? 'repeat' : 'cover'}
                />
            </View>
            <Text style={[isTablet ? styles.textProductTablet : styles.textProduct, { backgroundColor: categoryColor }]}>{product.name}</Text>
            <Text style={[isTablet ? styles.textPriceTablet : styles.textPrice, { backgroundColor: categoryColor }]}>Precio: {`${product.currency.symbol} ${product.price}`}</Text>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={onAddToCart} style={styles.addCartButton}>
                    <Text style={isTablet ? styles.addCartTextTablet : styles.addCartText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetails;
