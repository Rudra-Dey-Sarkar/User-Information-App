import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import App from '.';// imported App component

const Stack = createStackNavigator();

//This components displays the App component using navigation
const Display = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name='Index' component={App} options={{headerShown:false}}></Stack.Screen>
  </Stack.Navigator>
  )
}

export default Display