import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem } from '../../components/components';
import { styles } from './styles';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';
import { useSelector } from 'react-redux';

function Categories({ navigation }) {

  const orientation = useOrientation();

  const categories = useSelector((state) => state.categories.data);

  const onSelectCategory = ({ categoryId, categoryColor, categoryName }) => {
    navigation.navigate('Products', { categoryId, categoryColor, categoryName })
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <FlatList
            data={categories}
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
    </SafeAreaView>
  );
}

export default Categories;
