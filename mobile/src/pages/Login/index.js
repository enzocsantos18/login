import React from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Login"></TextInput>
      <TextInput style={styles.input} placeholder="Senha" type="password"></TextInput>
      <Text style={{
        padding: 10,
        textAlign: 'right',
      }}>Cadastrar-se</Text>
      <TouchableHighlight style={styles.button}>
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