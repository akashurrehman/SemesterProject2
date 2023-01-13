import React from 'react';
import {StyleSheet, Text,Image, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';  
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Explore from './../../Screens/Explore';
import Saved from './../../Screens/Saved';
import Trips from './../../Screens/Trips';
import Inbox from './../../Screens/Inbox';
import Profile from './../../Screens/Profile';
import { StackNavigation } from './StackNavigation';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Explore: { screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',

      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" color={tintColor} size={25} />
      )
    }
  },
    Saved: { screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
   },
  Trips: { screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./../../../assets/Images/Icons/airbnb-icon.png')} style={{ height: 40, width: 50, tintColor: tintColor }} />
      )
    } 
  },
    Inbox: { screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <MIcon name="android-messages" color={tintColor} size={24} />
      )
    } 
  },
  Profile: { 
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    } 
  },
},
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'black',
        MarginTop: 10,
        borderTopWidth: 10,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);
export default createAppContainer(TabNavigator);
