import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { styles } from './styles';
import { CartItem } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from "../../store/cart/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    const onIncreaseCartItem = (id) => {
        dispatch(increaseItemQuantity({ id }));
    };

    const onDecreaseCartItem = (id) => {
        dispatch(decreaseItemQuantity({ id }));
    };

    const onRemoveCartItem = (id) => {
        dispatch(removeItemFromCart({ id }));
    };

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
                <TouchableOpacity onPress={() => null} style={styles.checkoutButton}>
                        <Text style={styles.totalText}>Total compra</Text>
                        <Text style={styles.priceText}>${total}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
