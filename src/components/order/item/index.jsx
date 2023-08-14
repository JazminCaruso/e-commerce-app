import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ id, total, createAt, items }) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.orderItemContainer}>
      <View style={styles.orderHeaderContainer}>
        <Text style={styles.orderItemDate}>{formatDate(createAt)}</Text>
      </View>
      <View style={styles.orderBody}>
        <Text style={styles.orderItemId}>Nro. de operación: {id}</Text>
        <Text style={styles.orderItemId}>Cantidad de productos: {items.length}</Text>
        <Text style={styles.orderItemTotal}>Total: ${total}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
