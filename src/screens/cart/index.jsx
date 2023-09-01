import { View, FlatList, TouchableOpacity, Text, Modal, useWindowDimensions } from "react-native";
import { styles } from './styles';
import { CartItem } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, clearCart } from "../../store/cart/cartSlice";
import { useCreateOrderMutation } from "../../store/orders/api";
import { useState } from "react";


const Cart = ({ navigation }) => {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const dispatch = useDispatch();
    const localId = useSelector((state) => state.auth.user.localId);
    const email = useSelector((state) => state.auth.user.email);
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);
    const [isVisible, setIsVisible] = useState(false);
    const [createOrder, { data, isError, error, isLoading }] = useCreateOrderMutation();

    const onIncreaseCartItem = (id) => {
        dispatch(increaseItemQuantity({ id }));
    };

    const onDecreaseCartItem = (id) => {
        dispatch(decreaseItemQuantity({ id }));
    };

    const onRemoveCartItem = (id) => {
        dispatch(removeItemFromCart({ id }));
    };

    const onCreateOrder = () => {
        setIsVisible(true);
    };

    const buy = async () => {
        const newOrder = {
            id: Math.floor(Math.random()*1000),
            items: cart,
            total,
            user: {
                localId: localId,
                email: email,
            },
            createAt: Date.now(),
        };
        try {
            await createOrder( newOrder );
            setIsVisible(false);
            dispatch(clearCart());
            navigation.navigate('OrdersTab');
        } catch (e) {
            console.log({ error, e });
        } 
    }

    const cancel = () => {
        setIsVisible(false);
    }

    const viewProducts = () => {
        navigation.navigate('ShopTab');
    }

    if (cart.length === 0) {
        return (
            <View style={styles.emptyCartContainer}>
                <Text style={isTablet ? styles.emptyCartTextTablet : styles.emptyCartText}>El carrito está vacío</Text>
                <TouchableOpacity onPress={viewProducts} style={styles.modalButtonConfirm}>
                        <Text style={styles.explorarText}>Explorar productos</Text>
                </TouchableOpacity>
            </View>
        )
    }

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
                keyExtractor={(item) => (item.id ? item.id.toString() : '')}
                style={styles.listContainer}
            />
            <View style={styles.totalContainer}>
                <Text style={isTablet ? styles.totalTextTablet : styles.totalText}>Total compra</Text>
                <Text style={isTablet ? styles.priceTextTablet : styles.priceText}>${total}</Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
                        <Text style={isTablet ? styles.checkoutTextTablet : styles.checkoutText}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={isVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <Text style={styles.resumenText}>Resumen de su pedido:</Text>
                    <Text style={styles.dataResumenText}>{`Número de orden: ${Math.floor(Math.random()*1000)}`}</Text>
                    <Text style={styles.dataResumenText}>{`Precio total: ${total}`}</Text>
                    <Text style={styles.emailResumenText}>{`Si confirma, el pedido será realizado y el comprobante se enviará a ${email}`}</Text>
                    <View  style={styles.modalButtonContainer}>
                        <TouchableOpacity onPress={buy} style={styles.modalButtonConfirm}>
                                <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cancel} style={styles.modalButtonCancel}>
                                <Text style={styles.buttonTextCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
        </View>
    );
};

export default Cart;
