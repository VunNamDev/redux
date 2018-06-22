/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Provider from 'mobx-react';
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppStore from './mobx/AppStore';
import { observer } from 'mobx-react/native';

@observer
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  renderItems = mang => {
    return mang.map((value, index) => {
      return (
        <View key={index} style={styles.itemContainer}>
          <Text> {value} </Text>
        </View>
      );
    });
  };

  render() {
    const mang = AppStore.list.slice();
    alert(mang.length);
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={{ flex: 4 / 5 }}>
            <TextInput
              onChangeText={value => {
                this.text = value;
              }}
            />
          </View>
          <View style={{ flex: 1 / 5, height: 30 }}>
            <TouchableOpacity
              onPress={() => {
                AppStore.addItem(this.text);
              }}
              style={{
                height: 35,
                width: 50,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text>Thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.renderItems(mang)}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    paddingTop: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2
  }
});
