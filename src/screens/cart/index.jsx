import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from './styles';
import { CartItem } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, clearCart } from "../../store/cart/cartSlice";
import { useCreateOrderMutation } from "../../store/orders/api";


const Cart = ({ navigation }) => {

    const dispatch = useDispatch();
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
                id: 1,
                name: 'Jazmin',
                address: '123 street',
                phone: '1234567',
                mail: 'jaz@gmail.com'
            },
            payment: {
                method: 'VISA',
            },
            delivery: {
                method: 'UPS',
                trackingNumber: Math.floor(Math.random()*1000),
            },
            createAt: Date.now(),
            finishedAt: '',
        };
        try {
            await createOrder(newOrder);
            dispatch(clearCart());
            navigation.navigate('OrdersTab');
        } catch (e) {
            console.warn({ error, e });
        } 
        
    };

    if (cart.length === 0) {
        return (
            <View style={styles.emptyCartContainer}>
                <Text style={styles.emptyCartText}>El carrito está vacío</Text>
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
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
                        <Text style={styles.totalText}>Total compra</Text>
                        <Text style={styles.priceText}>${total}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
