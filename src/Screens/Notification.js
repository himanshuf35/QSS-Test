import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {notifPressed} from '../modules/Notifications/notifActions';

const notifData = [
  {notifText: 'You have got a notificatication', notifId: 1},
  {notifText: 'Check out the new Offers', notifId: 2},
  {notifText: 'Your cart items are waiting for you', notifId: 3},
  {notifText: 'Exciting Offers Buy one get one', notifId: 4},
  {notifText: 'Hurry! Sale 70% off', notifId: 5},
  {notifText: 'You have got some rewards point', notifId: 6},
];

export default function Notification({navigation}) {
  const {
    store: {dispatch},
  } = require('../../App');
  const [isListUpdated, setListUpdated] = useState(false);
  return (
    <View style={styles.center}>
      <Text>Notification</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.navigateText}>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          const index = Math.floor(
            Math.random() * Math.floor(notifData.length - 1),
          );
          console.log(index);
          const element = notifData[index];
          notifData.push(element);
          if (index % 2) {
            setListUpdated(true);
          } else {
            isListUpdated && setListUpdated(false);
          }
        }}>
        <Text>Insert Notif</Text>
      </TouchableOpacity>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        data={notifData}
        extraData={isListUpdated}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(notifPressed(item));
              }}
              style={styles.notifView}>
              <Text>{item.notifText}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  navigateText: {
    fontSize: 16,
    marginTop: 10,
    color: '#4ca2ed',
    fontWeight: '500',
  },
  notifView: {
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 2,
  },
});
