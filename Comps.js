import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Images from './Assets/imagePath';
const {width} = Dimensions.get('window');

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

/**
 * Rounded Card
 * @author Himanshu Yadav
 * @description Rounded Card Component with icon and category text
 * Text is wrapped inside Views to wrap text content incase string is very long
 */
export function RoundedView(props) {
  return (
    <View style={styles.roundedCard}>
      <View style={styles.roundedView}>
        <Image style={styles.roundedimage} source={Images.food} />
      </View>
      <View style={styles.roundedCardTextView}>
        <Text numberOfLines={1} style={styles.roundedCategoryText}>
          Food
        </Text>
      </View>
    </View>
  );
}

/**
 * Featured Card
 * @author Himanshu Yadav
 * @description Featured Card Component with Image, name, location, review and ratings
 * Text is wrapped inside Views to wrap text content incase string is very long
 */
export function FeaturedCard(props) {
  const rating = 4;
  return (
    <View style={styles.featuredCard}>
      <Image source={Images.foodimage} style={styles.featuredCardImage} />
      <View style={styles.featuredCardInnerView}>
        <View style={styles.featuredCardNameView}>
          <Text style={styles.featuredCardNameText}>Amrit Sweets</Text>
        </View>
        <View style={styles.locationAndReviewView}>
          <Image source={Images.location} style={styles.locationImage} />
          <Text style={styles.locationAndReviewText}>
            2Km Away(562 Reviews)
          </Text>
        </View>
        <View style={styles.starsContainerView}>
          {Array(5)
            .fill(0)
            .map((item, index) => {
              const imageSource =
                index <= rating - 1 ? Images.selectedStar : Images.star;
              return <Image source={imageSource} style={styles.starImage} />;
            })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalCard: {
    height: 135,
    width: 250,
    marginHorizontal: 7,
    paddingHorizontal: 15,
    paddingBottom: 5,
    justifyContent: 'flex-end',
  },
  roundedCard: {
    width: 70,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  featuredCard: {
    width: (width - 40) / 2,
    paddingBottom: 15,
    marginHorizontal: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  featuredCardImage: {
    height: 200,
    width: (width - 40) / 2,
  },
  horizontalImageStyle: {
    borderRadius: 15,
  },
  roundedimage: {
    height: 35,
    width: 35,
  },
  locationImage: {
    height: 14,
    width: 12,
    marginRight: 2,
  },
  starImage: {
    height: 12,
    width: 12,
    marginRight: 2,
  },
  starsContainerView: {
    marginTop: 5,
    flexDirection: 'row',
  },
  locationAndReviewView: {
    alignItems: 'center',
    marginTop: 3,
    flexDirection: 'row',
  },
  featuredCardInnerView: {
    paddingLeft: 10,
  },
  cardTextView: {
    flexDirection: 'row',
    alignItems: 'center',
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
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  featuredCardNameView: {
    marginTop: 5,
    flexShrink: 1,
  },
  roundedCardTextView: {
    marginTop: 8,
    flexShrink: 1,
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
  featuredCardNameText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  locationAndReviewText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#969595',
  },
});
