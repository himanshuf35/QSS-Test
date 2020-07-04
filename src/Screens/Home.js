import React, {useState} from 'react';
import {StyleSheet, ScrollView, FlatList, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HorizontalCard, RoundedView, FeaturedCard, Header} from './Comps';
import data from '../data';

const Home = ({navigation}) => {
  const {horizontalData, categoriesData, featuredData} = data;
  const [filteredData, setFilteredData] = useState(featuredData);
  const onChangeText = (text) => {
    const changedData = featuredData.filter((obj) => {
      text = text.trim().toLowerCase();
      const toSearchText = obj.title.toLowerCase();
      // Check if the length of text and input is numeric then search in rating
      if (text.length === 1 && !isNaN(parseInt(text))) {
        return obj.rating.toString() === text;
      } else {
        //Here we are searching on basis of name with the beginning
        const endPoint = Math.min(toSearchText.length, text.length);
        const queryString = toSearchText.substring(0, endPoint);
        // If length of text is greater than two and if we can't find match using substring
        // then we can check in between strings to search for keywords i.e Tourism in Malik Tourism
        return (
          text === queryString ||
          (text.length > 2 && toSearchText.includes(text))
        );
      }
    });
    setFilteredData(changedData);
  };
  const onHamburgerPress = () => {
    navigation.openDrawer();
  };
  const onNotifPress = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View style={styles.mainView}>
      <Header
        onChangeText={onChangeText}
        onHamburgerPress={onHamburgerPress}
        onNotifPress={onNotifPress}
      />
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
          {filteredData.map((item, index) => (
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
