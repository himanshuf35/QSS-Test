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
  Text,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Screens/Home';

const toggleDrawer = (navigation) => {
  navigation.toggleDrawer();
};

const goBack = (navigation) => {
  navigation.goBack();
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Screen1 = getDummyScreen('Screen 1', 'ToggleDrawer', toggleDrawer);
const Screen2 = getDummyScreen('Screen 2', 'Go Back', goBack);

function TestStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="DrawerNavigator" component={TestDrawer} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

function TestDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="DrawerScreen" component={Screen1} />
    </Drawer.Navigator>
  );
}

function getDummyScreen(screenName, buttonText, onButtonPress) {
  const screen = ({navigation}) => {
    return (
      <View style={styles.center}>
        <Text>{screenName}</Text>
        <TouchableOpacity
          onPress={() => {
            onButtonPress(navigation);
          }}>
          <Text style={styles.navigateText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return screen;
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <TestStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateText: {
    fontSize: 16,
    marginTop: 10,
    color: '#4ca2ed',
    fontWeight: '500',
  },
});

export default App;
