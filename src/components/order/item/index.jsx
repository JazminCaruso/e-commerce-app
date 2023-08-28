import { TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';

import { styles } from './styles';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ id, total, createAt, items }) => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 650;
  
  return (
    <View style={isTablet ? styles.orderItemContainerTablet : styles.orderItemContainer}>
      <View style={styles.orderHeaderContainer}>
        <Text style={isTablet ? styles.orderItemDateTablet : styles.orderItemDate}>{formatDate(createAt)}</Text>
        <Text style={isTablet ? styles.orderItemIdTablet : styles.orderItemId}>Nro. de operación: {id}</Text>
        <Text style={isTablet ? styles.orderItemIdTablet : styles.orderItemId}>Cantidad de productos: {items.length}</Text>
        <Text style={isTablet ? styles.orderItemTotalTablet : styles.orderItemTotal}>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
