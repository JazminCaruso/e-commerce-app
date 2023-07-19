import { View, FlatList } from "react-native";
import { styles } from './styles';
import CART from '../../constants/data/cart.json'
import { CartItem } from "../../components/components";

const Cart = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={CART}
                renderItem={({ item }) => <CartItem { ... item } />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.listContainer}
            />
        </View>
    );
};

export default Cart;
