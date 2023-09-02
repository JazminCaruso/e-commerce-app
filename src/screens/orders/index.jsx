import { View, FlatList, Text, useWindowDimensions } from 'react-native';
import { OrderItem } from '../../components/components';
import { useGetOrdersQuery } from '../../store/orders/api';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Orders = () => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const localId = useSelector((state) => state.auth.user.localId);
    const { data } = useGetOrdersQuery();
    const filteredOrders = data?.filter((order) => order.user && order.user.localId === localId);

    const renderItem = ({ item }) => <OrderItem {...item} />;
    const keyExtractor = (item) => item.id.toString();

    return (
        <View style={isTablet ? styles.containerTablet : styles.container}>
            {filteredOrders && filteredOrders.length === 0 ? (
                <View style={styles.emptyOrderContainer}>
                    <Text style={isTablet ? styles.emptyOrderTextTablet : styles.emptyOrderText}>No hay compras realizadas</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredOrders}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={isTablet ? 3 : 1}
                />
            )}
        </View>
    );
};

export default Orders;
