import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import { Header } from './components/components';
import { Categories, Products } from './screens/screens'
import { useState } from 'react';
import { COLORS, FONTS } from './themes/themes';

const categoryDefault = {
  categoryId: null,
  categoryColor: COLORS.background,
};

export default function App() {

  const [loaded] = useFonts({
    [FONTS.bold]: require('../assets/fonts/YsabeauInfant-Bold.ttf'),
    [FONTS.light]: require('../assets/fonts/YsabeauInfant-Light.ttf'),
    [FONTS.medium]: require('../assets/fonts/YsabeauInfant-Medium.ttf'),
    [FONTS.regular]: require('../assets/fonts/YsabeauInfant-Regular.ttf'),
  })

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

  const headerTitle = isCategorySelected ? 'Books' : 'Categories';

  if(!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size='large' />
      </View>
    )
  }

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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
