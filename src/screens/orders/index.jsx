import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useGetOrdersQuery } from "../../store/orders/api";
import { OrderItem } from "../../components/components";


const Orders = () => {

    const { data, error, isLoading } = useGetOrdersQuery();
    
    const renderItem = ({ item }) => <OrderItem {...item} />;

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orders</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

export default Orders;
