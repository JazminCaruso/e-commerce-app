import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem } from '../../components/components';
import { styles } from './styles';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes/colors';

function Categories({ navigation }) {

  const orientation = useOrientation();

  const { data, error, isLoading } = useGetCategoriesQuery();

  const onSelectCategory = ({ categoryId, categoryColor, categoryName }) => {
    navigation.navigate('Products', { categoryId, categoryColor, categoryName })
  };

  if (isLoading) return 
    <View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={COLORS.primary} />;
    </View>
  
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <FlatList
            data={data}
            style={styles.listContainer}
            contentContainerStyle={styles.itemContainer}
            renderItem={({item}) => 
              <CategoryItem 
                { ... item} 
                onSelectCategory={() => 
                  onSelectCategory({ categoryId: item.id, categoryColor: item.backgroundColor, categoryName: item.name }
                )} 
                style={orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}}
              />
            }
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Categories;

