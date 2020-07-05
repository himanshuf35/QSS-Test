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
const DrawerScreen = getDummyScreen(
  'Drawer Menu Screen',
  'ToggleDrawer',
  toggleDrawer,
);
const NotifScreen = getDummyScreen('Notification Screen', 'Go Back', goBack);

function TestStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="DrawerNavigator" component={TestDrawer} />
      <Stack.Screen name="Screen2" component={NotifScreen} />
    </Stack.Navigator>
  );
}

function TestDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
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
