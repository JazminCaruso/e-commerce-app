import { View, FlatList } from "react-native";
import { styles } from './styles';
import { CartItem } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } from "../../store/cart/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

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
        </View>
    );
};

export default Cart;
