import { View, FlatList } from "react-native";
import { styles } from './styles';
import { CartItem } from "../../components/components";
import { useSelector } from "react-redux";

const Cart = () => {

    const cart = useSelector((state) => state.cart.items);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartItem { ... item } />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.listContainer}
            />
        </View>
    );
};

export default Cart;
