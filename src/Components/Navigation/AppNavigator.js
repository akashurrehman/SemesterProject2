import React from 'react';
import {StyleSheet, Text,Image, View,Button,ScrollView} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Profile from './../../Screens/Profile'
import TrendingCities from '../../Screens/TopMenuScreens/Trending';
import AdaptedCities from '../../Screens/TopMenuScreens/Adapted';
import LoginScreen from './../../Screens/Login'
import SignUp from './../../Screens/SignUp'
import Trips from './../../Screens/Trips'
import Saved from './../../Screens/Saved'
import Inbox from './../../Screens/Inbox'
import Explore from './../../Screens/Explore'
import SearchScreen from '../../Screens/TopMenuScreens/SearchScreen';
import PersonalInformation from '../../Screens/PersonalInformation';
import AccountSettings from '../../Screens/AccountSettings';
import Bookmethod from '../../Screens/Bookmethod';
import { auth } from '../../Api/Authentication/Auth';
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const settingsStack = createStackNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Explore" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Explore" component={Explore} 
        options={{
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#e91e63',
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-search-outline" color={color} size={size} />
            ),
        }}   
        />
        <Tab.Screen name="Saved" component={Saved}
        options={{
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#e91e63',
            tabBarLabel: 'SAVED',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-heart-outline" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen name="Trips" component={Trips}
        options={{
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#e91e63',
            tabBarLabel: "TRIPS",
            display: 'none',
            tabBarIcon: ({ tintColor, size }) => (
                <Image source={require('./../../../assets/Images/Icons/airbnb-icon.png')} style={{ height: 40, width: 50, tintColor: tintColor }} />
            ),
        }}
        />
        <Tab.Screen name="Inbox" component={Inbox}
        options={{
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#e91e63',
            tabBarLabel: 'INBOX',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-chatbubble-outline" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen name="Settings" component={SettingsStackScreen}
        options={{
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#e91e63',
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-person-outline" color={color} size={size} />
            )
        }}
        />
    </Tab.Navigator>
    )
}

function MainStackNavigator() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='TabNavigator' component={MainTabNavigator}  screenOptions={{ headerShown: false}}/>
      <Stack.Screen name="TrendingCities" component={TrendingCities} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="AdaptedCities" component={AdaptedCities}/>
      <Stack.Screen name="Bookmethod" component={Bookmethod} screenOptions={{ headerShown: true}}/>
      <Stack.Screen name="Login" component={LoginScreen}   screenOptions={{ headerShown: false}}/>
    <Stack.Screen name="signup" component={SignUp}   screenOptions={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}
function SettingsStackScreen(){
    return(
        <settingsStack.Navigator>
            <settingsStack.Screen name="Settings" component={AccountSettings}   screenOptions={{ headerShown: false}}/>
            <settingsStack.Screen name="PersonalInformation" component={PersonalInformation}   screenOptions={{ headerShown: false}}/>
        </settingsStack.Navigator>
    )
}

export default MainStackNavigator