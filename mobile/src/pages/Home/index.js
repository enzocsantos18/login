import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage} from 'react-native';

// import { Container } from './styles';

const Home = () => {

  async function handleLogout(){
    await AsyncStorage.setItem("token", "")
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