import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem } from '../../components/components';
import { styles } from './styles';
import CATEGORIES from '../../constants/data/categories.json';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';

function Categories({ onSelectCategory }) {

  const orientation = useOrientation()
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <FlatList
            data={CATEGORIES}
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
