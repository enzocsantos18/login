import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Routes from './src/routes'
import Register from './src/pages/Register'
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './src/store';
export default function App() {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <Routes></Routes>
    </PersistGate>
    </Provider>
   
  );
}


