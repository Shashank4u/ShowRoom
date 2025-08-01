import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
    const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('hello'); 

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('home');
      })
      .catch((error) => {
        setLogin('Error: ' + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput 
          placeholder="Enter Password"
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <Text>{login}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: width * 0.8,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  inputContainer: {
    width: width * 0.8,
    alignItems: 'center',
  },
});
