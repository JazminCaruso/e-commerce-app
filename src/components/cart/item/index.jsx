import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../../themes/themes';

const CartItem = ({ id, categoryId, name, price, image, currency, quantity, stock, ...props }) => {

  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  return (
    <View style={isTablet ? styles.containerTablet : styles.container}>
      <View style={isTablet ? styles.imageContainerTablet : styles.imageContainer}>
        <Image source={{ uri: image }} style={isTablet ? styles.imageTablet : styles.image} />
      </View>
      <View style={isTablet ? styles.detailContainerTablet : styles.detailContainer}>
        <Text style={isTablet ? styles.nameTablet : styles.name}>{name}</Text>
        <Text style={isTablet ? styles.priceTablet : styles.price}>{`${currency.symbol} ${price}`}</Text>
        <Text style={isTablet ? styles.priceTablet : styles.qty}>{`Cantidad: ${quantity}`}</Text>
        <View style={isTablet ? styles.actionContainerTablet : styles.actionContainer}>
          <TouchableOpacity style={isTablet ? styles.increaseButtonTablet : styles.increaseButton} onPress={() => {}}>
            <Text style={isTablet ? styles.buttonTextTablet : styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={isTablet ? styles.decreaseButtonTablet : styles.decreaseButton} onPress={() => {}}>
            <Text style={isTablet ? styles.buttonTextTablet : styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={isTablet ? styles.deleteButtonTablet : styles.deleteButton}>
            <Ionicons name="trash" size={isTablet? 20 : 14} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
