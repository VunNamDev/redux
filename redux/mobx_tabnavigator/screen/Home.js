import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react/native';
import { inject } from 'mobx-react';
@inject('store')
@observer
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen </Text>
        <Text>{this.props.store.name} </Text>
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
                this.props.store.changeName(this.text);
              }}
              style={{ height: 35, width: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
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
