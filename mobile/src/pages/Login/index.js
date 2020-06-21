import React, {useState} from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, AsyncStorage} from 'react-native';
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';
import {useSelector, useDispatch} from 'react-redux'
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation();

  const store = useSelector(state => state)
  const dispatch = useDispatch();
  async function handleLogin(){
  

    try{
      const response = await api.post('sessions', {
        email, password
      })

      const {token} = response.data; 
      console.log(token)

      if(token){
        await AsyncStorage.setItem("token", token)
      }

      dispatch({type: 'ADD_TOKEN', token})
      // navigation.navigate("Home")
    }catch(err){
      alert("Insira os dados corretamente")
      
    }


    // console.log("Response: ", response.data.token)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput value={email} onChangeText={value => setEmail(value)} style={styles.input} placeholder="Login"></TextInput>
      <TextInput style={styles.input} value={password} onChangeText={value => setPassword(value)} placeholder="Senha" type="password"></TextInput>
      <Text style={{
        padding: 10,
        textAlign: 'right',
      }}>Cadastrar-se</Text>
      <TouchableHighlight onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#3D3D3D',
    marginBottom: 8,
  },
  input:{
    padding: 20,
    borderWidth: 2,
    borderColor: '#3D3D3D',
    borderRadius: 4,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#3d3d3d",
    padding: 20,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Login;