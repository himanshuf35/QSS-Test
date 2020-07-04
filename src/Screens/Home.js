import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HorizontalCard, RoundedView, FeaturedCard, Header} from './Comps';
import data from '../data';
const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  const {horizontalData, categoriesData, featuredData} = data;
  const onHamburgerPress = () => {
    navigation.openDrawer();
  };
  const onNotifPress = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View style={styles.mainView}>
      <Header onHamburgerPress={onHamburgerPress} onNotifPress={onNotifPress} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          contentContainerStyle={styles.horizontalCardsContainer}
          data={horizontalData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => <HorizontalCard item={item} />}
          keyExtractor={(item, index) => {
            return item + index;
          }}
        />
        <FlatList
          contentContainerStyle={styles.categoriesContainer}
          data={categoriesData}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => <RoundedView item={item} />}
          keyExtractor={(item, index) => {
            return item + index;
          }}
        />
        <View style={styles.featuredCardsContainer}>
          {featuredData.map((item, index) => (
            <FeaturedCard key={item + index} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontalCardsContainer: {
    paddingHorizontal: 12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginBottom: 30,
    paddingHorizontal: 6,
  },
  featuredCardsContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
