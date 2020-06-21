import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage} from 'react-native';
// import { Container } from './styles';
import {useDispatch} from 'react-redux'

const Home = () => {
  const dispatch = useDispatch();

  function handleLogout(){
    dispatch({type: 'REMOVE_TOKEN', token: ''})
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text >Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;