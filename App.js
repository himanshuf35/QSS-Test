import React, {useEffect} from 'react';
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
import {createStore, combineReducers, applyMiddleware} from 'redux';
import Notification from './src/Screens/Notification';
import homeReducer from './src/modules/Home/homeReducer';
import notifReducer from './src/modules/Notifications/notifReducer';
import Home from './src/Screens/Home';

function typeChecker() {
  return (next) => (action) => {
    console.log('Action Type', action.type);
    const returnValue = next(action);
    return returnValue;
  };
}

function thunkMiddleware({getState, dispatch}) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else {
      return next(action);
    }
  };
}

function logger({getState}) {
  return (next) => (action) => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  };
}

const rootReducer = combineReducers({
  homeObj: homeReducer,
  notifObj: notifReducer,
});

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunkMiddleware, typeChecker, logger),
);

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
      <Stack.Screen name="Screen2" component={Notification} />
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
  useEffect(() => {
    return store.subscribe(() => {
      console.log('global state', store.getState());
    });
  });
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
});
export default App;
