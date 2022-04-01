//define routes here for react-navigation
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {FreelancersList, Profile} from  './scenes/index';

const Stack = createNativeStackNavigator();



const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="list" component={FreelancersList} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="profile" component={Profile} options={{
    headerShown: false
  }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})