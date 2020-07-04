/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  StatusBar,
} from 'react-native';
import {HorizontalCard, RoundedView, FeaturedCard, Header} from './Comps';
import data from './data';

const App: () => React$Node = () => {
  const {horizontalData, categoriesData, featuredData} = data;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <ScrollView
          style={{marginBottom: 50}}
          showsVerticalScrollIndicator={false}>
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
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

export default App;
