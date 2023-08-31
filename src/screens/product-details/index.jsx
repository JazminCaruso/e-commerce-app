import { View, Image, Text, TouchableOpacity, ActivityIndicator, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cart/cartSlice";
import { addToFav, removeItemFromFav } from "../../store/favorites/favSlice";
import { useGetProductByIdQuery } from "../../store/products/api";
import { COLORS } from "../../themes/colors";
import { Ionicons } from '@expo/vector-icons';

function ProductDetails({ route }) {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const dispatch = useDispatch();
    const { productId, categoryColor } = route.params;
    const { data: productsData, isLoading } = useGetProductByIdQuery(productId);
    const product = productsData?.find((product) => product.id === productId);

    const onAddToCart = () => {
        dispatch(addToCart(product));
    };

    const favs = useSelector((state) => state.fav.items);
    const isFav = favs.some((fav) => fav.id === product?.id);

    const toggleFav = () => {
        if (isFav) {
            dispatch(removeItemFromFav(product));
        } else {
            dispatch(addToFav(product));
        }
    };

    if (isLoading) return 
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />;
    </View>

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleFav} style={styles.addFavButton}>
                <Ionicons 
                    name={isFav ? 'star' : 'star-outline'}
                    size={isTablet ? 28 : 24} 
                    color={COLORS.text} 
                />
            </TouchableOpacity>
            <View style={styles.containerImage}>
                <Image 
                    source={{ uri: product.image }} 
                    style={isTablet ? styles.imageProductTablet : styles.imageProduct} 
                    resizeMode={isTablet ? 'repeat' : 'cover'}
                />

                <Text style={isTablet ? styles.textProductTablet : styles.textProduct}>{product.name}</Text>
                <Text style={isTablet ? styles.textPriceTablet : styles.textPrice}>Precio: {`${product.currency.symbol} ${product.price}`}</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={onAddToCart} style={styles.addCartButton}>
                    <Text style={isTablet ? styles.addCartTextTablet : styles.addCartText}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductDetails;
