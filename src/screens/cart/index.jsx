import { View, FlatList, TouchableOpacity, Text, useWindowDimensions } from "react-native";
import { styles } from './styles';
import { CartItem } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, clearCart } from "../../store/cart/cartSlice";
import { useCreateOrderMutation } from "../../store/orders/api";


const Cart = ({ navigation }) => {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const dispatch = useDispatch();
    const localId = useSelector((state) => state.auth.user.localId);
    const email = useSelector((state) => state.auth.user.email);
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    const [createOrder, { data, isError, error, isLoading }] = useCreateOrderMutation();

    const onIncreaseCartItem = (id) => {
        dispatch(increaseItemQuantity({ id }));
    };

    const onDecreaseCartItem = (id) => {
        dispatch(decreaseItemQuantity({ id }));
    };

    const onRemoveCartItem = (id) => {
        dispatch(removeItemFromCart({ id }));
    };

    const onCreateOrder = async () => {
        const newOrder = {
            id: Math.floor(Math.random()*1000),
            items: cart,
            total,
            user: {
                id: localId,
                email: email,
            },
            createAt: Date.now(),
        };
        try {
            await createOrder( newOrder );
            dispatch(clearCart());
            navigation.navigate('OrdersTab');
        } catch (e) {
            console.warn({ error, e });
        } 
    };

    if (cart.length === 0) {
        return (
            <View style={styles.emptyCartContainer}>
                <Text style={isTablet ? styles.emptyCartTextTablet : styles.emptyCartText}>El carrito está vacío</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => 
                    <CartItem { ... item } 
                        onIncreaseCartItem={onIncreaseCartItem} 
                        onDecreaseCartItem={onDecreaseCartItem} 
                        onRemoveCartItem={onRemoveCartItem}
                    />
                }
                keyExtractor={(item) => item.id.toString()}
                style={styles.listContainer}
            />
            <View style={styles.totalContainer}>
                <Text style={isTablet ? styles.totalTextTablet : styles.totalText}>Total compra</Text>
                <Text style={isTablet ? styles.priceTextTablet : styles.priceText}>${total}</Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
                        <Text style={isTablet ? styles.checkoutTextTablet : styles.checkoutText}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
