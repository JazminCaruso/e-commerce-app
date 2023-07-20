import { View, Text, TouchableOpacity, FlatList, ImageBackground, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { Input } from '../../components/components'
import { useState } from "react";
import { COLORS } from "../../themes/colors";
import { Ionicons } from '@expo/vector-icons'; 
import PRODUCTS from '../../constants/data/products.json';

function Products ({ navigation, route }) {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const { categoryId, categoryColor } = route.params;

    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [borderColor, setBorderColor] = useState("#acacac")

    const onHandlerFocus = () => {
        setBorderColor(COLORS.primary);
    };
    
    const onHandlerBlur = () => {
        setBorderColor("#acacac");
    };

    const onHandlerChangeText = (text) => {
        setSearch(text);
        filteredProductsBySearch(text);
    };

    const filteredProductsByCategory = PRODUCTS.filter(
        (product) => product.categoryId === categoryId
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

    const onSelectProduct = ({ productId, productName }) => {
        navigation.navigate('ProductDetails', { productId, categoryColor, productName });
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.headerInput}>
                <Input
                    placeholder='Buscar'
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
                contentContainerStyle={styles.productsContainer}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onSelectProduct({ productId: item.id, productName: item.name })} style={isTablet? styles.productContainerTablet : styles.productContainer}>
                        <ImageBackground 
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={{ uri: item.image }} 
                            style={[isTablet ? styles.productImageTablet : styles.productImage, , { backgroundColor: categoryColor } ]} 
                        />
                        <View style={styles.productDetail}>
                            <Text style={isTablet ? styles.productNameTablet : styles.productName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                            <Text style={isTablet ? styles.productPriceTablet : styles.productPrice}>{`${item.currency.symbol} ${item.price}`}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={ isTablet? 3 : 2}
                showsVerticalScrollIndicator={false}
            />
            {filteredProducts.length == 0 && search.length > 0 && (
                <View style={styles.notFound}>
                    <Text style={isTablet ? styles.notFoundTextTablet : styles.notFoundText}>Lo sentimos, todavía no contamos con ese libro</Text>
                </View>
            )}
        </View>
    )
}

export default Products;
