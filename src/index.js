import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from './components/components';
import { Categories, Products } from './screens/screens'
import { useState } from 'react';
import { COLORS } from './themes/themes';

const categoryDefault = {
  categoryId: null,
  categoryColor: COLORS.secondary,
};

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

  const onHandlerSelectCategory = ({ categoryId, categoryColor }) => {
    setSelectedCategory({ categoryId, categoryColor });
    setIsCategorySelected(!isCategorySelected);
  }

  const onHandlerNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefault);
  }

  const headerTitle = isCategorySelected ? 'Products' : 'Categories';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header 
          title={headerTitle}
          style={{ backgroundColor: selectedCategory.categoryColor }}
        />
        {
          isCategorySelected ? (
            <Products onHandlerGoBack={onHandlerNavigate} categorySelected={selectedCategory}/>
          ) : (
            <Categories onSelectCategory={onHandlerSelectCategory}/>
          )
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
