import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

const Routes = () => {
  const Stack = createStackNavigator();
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {isLoggedIn ? (
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