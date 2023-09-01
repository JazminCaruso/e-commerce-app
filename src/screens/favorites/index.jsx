import { View, FlatList, Text, useWindowDimensions } from "react-native";
import { styles } from './styles';
import { FavoriteItem } from '../../components/components';
import { useSelector } from "react-redux";
import { ProductDetails } from "../product-details/index"

const Favorites = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const favs = useSelector((state) => state.fav.items);

    const onSelectProduct = (productId, categoryColor) => {
        navigation.navigate('ProductDetails', { productId, categoryColor });
    };

    if (favs.length === 0) {
        return (
            <View style={styles.emptyFavsContainer}>
                <Text style={isTablet ? styles.emptyCartFavsTablet : styles.emptyFavsText}>No tienes productos en favoritos</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={favs}
                renderItem={({ item }) => (
                    <FavoriteItem 
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        onSelectProduct={() => onSelectProduct(item.id, item.backgroundColor)}
                    /> 
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={isTablet ? 3 : 1}
            />
        </View>
    );
};

export default Favorites;