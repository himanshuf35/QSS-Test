import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Images from '../Assets/imagePath';
const {width} = Dimensions.get('window');
const circleSize = (width - (12 + 5 * 24)) / 5;

/**
 * Horizontal Card
 * @author Himanshu Yadav
 * @description Horizontal Card Component with image as background.
 * Texts are wrapped inside Views to wrap text content incase string is very long
 */
export function HorizontalCard({item}) {
  return (
    <TouchableOpacity>
      <ImageBackground
        imageStyle={styles.horizontalImageStyle}
        source={item.image}
        style={styles.horizontalCard}>
        <View style={styles.cardTextView}>
          <View style={styles.titleTextView}>
            <Text numberOfLines={1} style={styles.titleText}>
              {item.cardName}
            </Text>
          </View>
          <View style={styles.priceTextView}>
            <Text numberOfLines={1} style={styles.priceText}>
              {item.price}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

/**
 * Rounded Card
 * @author Himanshu Yadav
 * @description Rounded Card Component with icon and category text
 * Text is wrapped inside Views to wrap text content incase string is very long
 */
export function RoundedView({item}) {
  return (
    <TouchableOpacity style={styles.roundedCard}>
      <View style={styles.roundedView}>
        <Image style={styles.roundedimage} source={item.image} />
      </View>
      <View style={styles.roundedCardTextView}>
        <Text numberOfLines={1} style={styles.roundedCategoryText}>
          {item.categoryName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

/**
 * Featured Card
 * @author Himanshu Yadav
 * @description Featured Card Component with Image, name, location, review and ratings
 * Text is wrapped inside Views to wrap text content incase string is very long
 */
export function FeaturedCard({item}) {
  const {title, distance, image, reviews, rating} = item;
  const locationAndReview = `${distance} Away (${reviews} reviews)`;
  return (
    <TouchableOpacity style={styles.featuredCard}>
      <Image source={image} style={styles.featuredCardImage} />
      <View style={styles.featuredCardInnerView}>
        <View style={styles.featuredCardNameView}>
          <Text style={styles.featuredCardNameText}>{title}</Text>
        </View>
        <View style={styles.locationAndReviewView}>
          <Image source={Images.location} style={styles.locationImage} />
          <Text style={styles.locationAndReviewText}>{locationAndReview}</Text>
        </View>
        <View style={styles.starsContainerView}>
          {Array(5)
            .fill(0)
            .map((item, index) => {
              const imageSource =
                index <= rating - 1 ? Images.selectedStar : Images.star;
              return (
                <Image
                  key={item + index}
                  source={imageSource}
                  style={styles.starImage}
                />
              );
            })}
        </View>
      </View>
    </TouchableOpacity>
  );
}

/**
 * Header
 * @author Himanshu Yadav
 * @description Header Component with drawer navigation, search and notifIcon
 * Text is wrapped inside Views to wrap text content incase string is very long
 */
export function Header({
  onHamburgerPress = () => {},
  onNotifPress = () => {},
  onChangeText = () => {},
}) {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={onHamburgerPress}>
        <Image
          source={Images.hamburger}
          style={styles.hamburgerImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TextInput
        onChangeText={onChangeText}
        style={styles.searchInput}
        placeholder="Search By Name/Rating"
      />
      <TouchableOpacity onPress={onNotifPress}>
        <Image source={Images.notif} style={styles.notifImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  //Card Container Styles
  horizontalCard: {
    height: 150,
    width: 250,
    marginHorizontal: 6,
    paddingHorizontal: 15,
    paddingBottom: 5,
    justifyContent: 'flex-end',
  },
  roundedCard: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  featuredCard: {
    width: (width - 52) / 2,
    paddingBottom: 15,
    marginHorizontal: 8,
    marginBottom: 20,
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
  //Image Styles
  notifImage: {
    height: 25,
    width: 25,
  },
  hamburgerImage: {
    height: 25,
    width: 25,
  },
  featuredCardImage: {
    height: 200,
    width: (width - 52) / 2,
  },
  horizontalImageStyle: {
    height: 150,
    borderRadius: 15,
  },
  roundedimage: {
    height: circleSize / 2,
    width: circleSize / 2,
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
  // View styles
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
    marginBottom: 25,
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
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
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
    flex: 0.7,
    flexShrink: 1,
  },
  priceTextView: {
    marginLeft: 10,
    alignItems: 'flex-end',
    flex: 0.3,
    flexShrink: 1,
  },
  //Text styles
  searchInput: {
    padding: 12,
    marginHorizontal: 15,
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  priceText: {
    fontSize: 22,
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
