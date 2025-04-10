// App.js
import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import { firebase } from './firebaseConfig';  // Import the Firebase config

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Sign-up function
  const handleSignUp = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      setMessage('User created: ' + userCredential.user.email);
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  // Sign-in function
  const handleSignIn = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      setMessage('Welcome back: ' + userCredential.user.email);
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
      <Text>{message}</Text>
    </View>
  );
}
