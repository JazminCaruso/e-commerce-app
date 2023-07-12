import { View, Text, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { styles } from "./styles";
import { Input } from '../../components/components'
import { useState } from "react";
import { COLORS } from "../../themes/colors";
import { Ionicons } from '@expo/vector-icons'; 
import PRODUCTS from '../../constants/data/products.json';

function Products ({ onHandlerGoBack, categorySelected }) {

    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [borderColor, setBorderColor] = useState(COLORS.primary)

    const onHandlerFocus = () => {};
    const onHandlerBlur = () => {};
    const onHandlerChangeText = (text) => {
        setSearch(text);
        filteredProductsBySearch(text);
    };

    const filteredProductsByCategory = PRODUCTS.filter(
        (product) => product.categoryId === categorySelected.categoryId
    );

    const filteredProductsBySearch = (query) => {
        let updateProductList = [ ... filteredProductsByCategory];
        updateProductList = updateProductList.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            }
        )
        setFilteredProducts(updateProductList);
    }

    const clearSearch = () => {
        setSearch('');
        setFilteredProducts([]);
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.headerInput}>
                <Input
                    placeholder='Search'
                    onHandleFocus={onHandlerFocus}
                    onHandleBlur={onHandlerBlur}
                    onHandleChangeText={onHandlerChangeText}
                    value={search}
                    borderColor={borderColor}
                />
                {search.length > 0 && (
                    <Ionicons 
                        style={styles.clearIcon}
                        name="close-circle" 
                        size={24} 
                        color={COLORS.primary} 
                        onPress={clearSearch} 
                    />
                )}
            </View>
            <FlatList
                style={styles.productsList}
                contentContainerStyle={styles.productsContainer}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                renderItem={({ item }) => (
                    <TouchableOpacity oonPress={() => null}style={styles.productContainer}>
                        <ImageBackground 
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={{ uri: item.image }} 
                            style={[styles.productImage, , { backgroundColor: categorySelected.categoryColor } ]} 
                        />
                        <View style={styles.productDetail}>
                            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                            <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            {filteredProducts.length == 0 && search.length > 0 && (
                <View style={styles.notFound}>
                    <Text style={styles.notFoundText}>No products found</Text>
                </View>
            )}
            <TouchableOpacity style={styles.goBack} onPress={onHandlerGoBack}>
                <Ionicons 
                    name="arrow-back-circle" 
                    size={24} 
                    color={COLORS.primary} 
                />
                <Text style={styles.goBackText}>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Products;