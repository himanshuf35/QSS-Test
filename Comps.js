import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import Images from './Assets/imagePath';

/**
 * Horizontal Card
 * @author Himanshu Yadav
 * @description Horizontal Card Component with image as background.
 * Texts are wrapped inside Views to wrap text content incase string is very long
 */
export function HorizontalCard(props) {
  return (
    <ImageBackground
      imageStyle={styles.horizontalImageStyle}
      source={Images.kid}
      style={styles.horizontalCard}>
      <View style={styles.cardTextView}>
        <View style={styles.titleTextView}>
          <Text numberOfLines={1} style={styles.titleText}>
            HorizontalCardhjjhjhghhhjhjjh
          </Text>
        </View>
        <View style={styles.priceTextView}>
          <Text numberOfLines={1} style={styles.priceText}>
            $19h6767
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export function RoundedView(props) {
  return (
    <View style={styles.roundedCard}>
      <View style={styles.roundedView}>
        <Image style={styles.roundedimage} source={Images.food} />
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Text style={styles.roundedCategoryText}>Food</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalCard: {
    height: 135,
    width: 250,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingBottom: 5,
    justifyContent: 'flex-end',
  },
  horizontalImageStyle: {
    borderRadius: 15,
  },
  cardTextView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roundedimage: {
    height: 35,
    width: 35,
  },
  roundedCard: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  roundedView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    width: 70,
    borderRadius: 35,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  titleTextView: {
    flex: 0.75,
    flexShrink: 1,
  },
  priceTextView: {
    marginLeft: 10,
    alignItems: 'flex-end',
    flex: 0.25,
    flexShrink: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  roundedCategoryText: {
    fontSize: 12,
    color: 'black',
  },
});
