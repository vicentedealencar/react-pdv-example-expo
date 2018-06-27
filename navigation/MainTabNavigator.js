import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import SettingsScreen from '../screens/SettingsScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const CartStack = createStackNavigator({
  Cart: CartScreen
})

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cart${focused ? '' : '-outline'}`
          : 'md-cart'
      }
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-options${focused ? '' : '-outline'}`
          : 'md-options'
      }
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  CartStack,
  SettingsStack
})
