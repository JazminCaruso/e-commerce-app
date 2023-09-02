import { ActivityIndicator, FlatList, View } from 'react-native';
import { CategoryItem } from '../../components/components';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes/colors';
import { styles } from './styles';

function Categories({ navigation }) {
    const { data, isLoading } = useGetCategoriesQuery();

    const onSelectCategory = ({ categoryId, categoryColor, categoryName }) => {
        navigation.navigate('Products', { categoryId, categoryColor, categoryName });
    };

    if (isLoading) return;
    <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={COLORS.primary} />;
    </View>;

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    style={styles.listContainer}
                    contentContainerStyle={styles.itemContainer}
                    renderItem={({ item }) => (
                        <CategoryItem
                            {...item}
                            onSelectCategory={() =>
                                onSelectCategory({
                                    categoryId: item.id,
                                    categoryColor: item.backgroundColor,
                                    categoryName: item.name,
                                })
                            }
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

export default Categories;
