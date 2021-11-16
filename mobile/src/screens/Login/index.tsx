import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { saveUserData } from '../../libs/storage';

import { DogLoading } from '../../components/DogLoading';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { styles } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleLogin() {
    setLoading(true);
    const response = await api.post('./login', { 
      username: email,
      password: password
    });

    if (response.status === 200) {
      setLoading(false);
      await handleSaveUserData(email);
      navigation.navigate('Welcome');
      return;
    } 
    
    navigation.navigate('Home');
  }

  async function handleSaveUserData(email: string) {
    const { data } = await api.post('/usuario/email', { email });
    const userData = data.response;
    
    saveUserData(userData);
  }

  if (loading) {
    return <DogLoading />
  }

  return (
    <View style={styles.container}>
      <BorderlessButton
        style={styles.buttonBack}
        onPress={handleGoBack}
      >
        <Feather 
          name='arrow-left'
          size={20}
          color='#4B3F4E'
        />
      </BorderlessButton>

      <View style={styles.inputBlock}>
        <Input
          title='E-mail'
          placeholder='email@email.com'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          title='Senha'
          password
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.button}>
        <Button
          title='Entrar'
          primary
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}