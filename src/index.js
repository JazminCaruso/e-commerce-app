import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import { Header } from './components/components';
import { Categories, Products } from './screens/screens'
import { useState } from 'react';
import { COLORS, FONTS } from './themes/themes';

const categoryDefault = {
  categoryId: null,
  categoryColor: COLORS.background,
  categoryName: null,
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

  const onHandlerSelectCategory = ({ categoryId, categoryColor, categoryName }) => {
    setSelectedCategory({ categoryId, categoryColor, categoryName });
    setIsCategorySelected(!isCategorySelected);
  }

  const onHandlerNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(categoryDefault);
  }

  const headerTitle = isCategorySelected ? `Libros de ${selectedCategory.categoryName}` : 'Categorías';

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
        {!isCategorySelected && 
          <View>
            <Text style={styles.principalText}>LibrApp</Text>
            <Text style={styles.subtitleText}>Descubre, elige y disfruta de los mejores libros</Text>
          </View>
        }
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
    paddingTop: Platform.OS === 'ios'? 0 : StatusBar.currentHeight,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  principalText: {
    margin: 10,
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 32,
    color: COLORS.primary,
  }, 
  subtitleText: {
    marginHorizontal: 10,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: FONTS.italic,
    fontSize: 20,
    color: COLORS.primary,
  },
});
