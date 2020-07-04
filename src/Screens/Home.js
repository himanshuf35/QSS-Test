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

function MyDrawer() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

const Home = () => {
  const {horizontalData, categoriesData, featuredData} = data;
  return (
    <View style={styles.mainView}>
      <Header />
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
        <View style={styles.categoriesContainer}>
          {categoriesData.map((item, index) => (
            <RoundedView key={item + index} item={item} />
          ))}
        </View>
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
