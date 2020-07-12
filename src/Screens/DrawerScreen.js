import React, {PureComponent, Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(nextProps) {
    console.log('nextProps', nextProps);
    return null;
  }
  shouldComponentUpdate(nextProps) {
    //Below is the implementation of how PureComponent Works
    let shouldUpdate = false;
    for (const property in nextProps) {
      shouldUpdate = nextProps[property] !== this.props[property];
      if (shouldUpdate) {
        break;
      }
    }
    return shouldUpdate;
  }

  componentDidUpdate(prevProps) {
    console.warn('prevProps', prevProps);
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Drawer Screen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}>
          <Text style={styles.navigateText}>Toggle Drawer</Text>
        </TouchableOpacity>
        <FlatList
          keyExtractor={(item, index) => item + index}
          data={this.props.data}
          style={{flex: 1}}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

export default function DrawerScreen({navigation}) {
  const data = ['a', 'b', 'c', 'd'];
  const [drawerState, updateDrawerState] = useState({
    name: 'DrawerScreen',
    type: 'PureComponent',
    data: ['a', 'b', 'c', 'd'],
  });
  return (
    <View style={styles.center}>
      <TouchableOpacity
        onPress={() => {
          data.push('f');
          updateDrawerState({
            name: 'DrawerScreen',
            type: 'Component',
            // data: ['a', 'b', 'c', 'd'],
          });
        }}>
        <Text>Update State</Text>
      </TouchableOpacity>
      <DrawerComponent
        navigation={navigation}
        data={drawerState.data}
        name={drawerState.name}
        type={drawerState.type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
