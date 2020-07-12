import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function DrawerScreen({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Drawer Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Text style={styles.navigateText}>Toggle Drawer</Text>
      </TouchableOpacity>
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
