import { View, FlatList, Text, useWindowDimensions } from 'react-native';
import { FavoriteItem } from '../../components/components';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Favorites = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;
    const isTabletB = width >= 800;

    const favs = useSelector((state) => state.fav.items);

    const onSelectProduct = (productId, categoryColor) => {
        navigation.navigate('ProductDetails', { productId, categoryColor });
    };

    if (favs.length === 0) {
        return (
            <View style={styles.emptyFavsContainer}>
                <Text style={isTablet ? styles.emptyFavsTextTablet : styles.emptyFavsText}>No tienes productos en favoritos</Text>
            </View>
        );
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
                numColumns={isTabletB ? 2 : 1}
                style={styles.listContainer}
            />
        </View>
    );
};

export default Favorites;
