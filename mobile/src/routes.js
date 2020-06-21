import React, {useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

const Routes = () => {
  const Stack = createStackNavigator();

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const verifyToken = async () => {
      const tokenExists = await AsyncStorage.getItem("token")
      if(tokenExists){
        setLoggedIn(true)
      }
    }
    verifyToken()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {loggedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          </>
          )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;