import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../themes/themes';
import { styles } from './styles';

const CartItem = ({
    id,
    name,
    price,
    image,
    currency,
    quantity,
    onIncreaseCartItem,
    onDecreaseCartItem,
    onRemoveCartItem,
}) => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return (
        <View style={isTablet ? styles.containerTablet : styles.container}>
            <View style={isTablet ? styles.imageContainerTablet : styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={isTablet ? styles.imageTablet : styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={isTablet ? styles.detailContainerTablet : styles.detailContainer}>
                <Text style={isTablet ? styles.nameTablet : styles.name}>{name}</Text>
                <Text
                    style={isTablet ? styles.priceTablet : styles.price}
                >{`${currency.symbol} ${price}`}</Text>
                <Text
                    style={isTablet ? styles.qtyTablet : styles.qty}
                >{`Cantidad: ${quantity}`}</Text>
                <View style={isTablet ? styles.actionContainerTablet : styles.actionContainer}>
                    <TouchableOpacity
                        style={isTablet ? styles.increaseButtonTablet : styles.increaseButton}
                        onPress={() => onIncreaseCartItem(id)}
                    >
                        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={isTablet ? styles.decreaseButtonTablet : styles.decreaseButton}
                        onPress={() => onDecreaseCartItem(id)}
                    >
                        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonText}>
                            -
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={isTablet ? styles.deleteButtonTablet : styles.deleteButton}
                        onPress={() => onRemoveCartItem(id)}
                    >
                        <Ionicons name="trash" size={isTablet ? 20 : 14} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartItem;
