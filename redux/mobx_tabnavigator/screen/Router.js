import React, { Component } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from './Home';
import Setting from './Setting';

export default TabNavigator(
  {
    Home: {
      screen: Home
    },
    Setting: {
      screen: Setting
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let lab;
        switch (routeName) {
          case 'Home':
            lab = 'Trang chủ';
            break;
          case 'Setting':
            lab = 'Cài đặt';
        }

        if (focused) return <Text style={{ fontSize: 12, textAlign: 'center' }}>{lab}</Text>;
        return <Text style={{ fontSize: 12, textAlign: 'center', color: '#d1cece' }}>{lab}</Text>;
      }
    }),

    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray'
    }
  }
);
