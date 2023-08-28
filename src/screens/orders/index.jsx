import { View, FlatList, useWindowDimensions } from "react-native";
import { styles } from './styles';
import { useGetOrdersQuery } from "../../store/orders/api";
import { OrderItem } from "../../components/components";


const Orders = () => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const { data, error, isLoading } = useGetOrdersQuery();
    
    const renderItem = ({ item }) => <OrderItem {...item} />;

    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={isTablet ? styles.containerTablet : styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={ isTablet? 3 : 1}
            />
        </View>
    );
};

export default Orders;