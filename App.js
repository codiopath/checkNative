import React, { useState } from 'react'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import AddUser from './screens/AddUser';
import Signup from './screens/Signup';
import UserData from './screens/UserData';

const Stack = createNativeStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        // headerShown: false
        headerTransparent: true
      }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: ''
          }}
        />
        <Stack.Screen name="Signup" component={Signup}
        options={{
          // headerShown: false
          headerTitle: '',
          headerTintColor: '#2852eb'
        }} />
        <Stack.Screen name="AddUser" component={AddUser}
        options={{
          headerShown: false,
        }} />
        <Stack.Screen name="UserData" component={UserData}
        options={{
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App








