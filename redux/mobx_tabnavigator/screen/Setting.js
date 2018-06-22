import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react/native';
import { PermissionsAndroid } from 'react-native';

@inject('store')
@observer
export default class Setting extends Component {
  async requestLocationPermission() {
    const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      alert("You've access for the location");
    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: 'Cool Location App required Location permission',
          message: 'We required Location permission in order to get device location ' + 'Please grant us.'
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          alert("You've access for the location");
        } else {
          alert("You don't have access for the location");
        }
      } catch (err) {
        alert(err);
      }
    }
  }
  render() {
    this.requestLocationPermission();
    return (
      <View style={styles.container}>
        <Text>Setting screen </Text>
        <Text>{this.props.store.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
