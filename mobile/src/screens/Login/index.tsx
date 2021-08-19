import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { DogLoading } from '../../components/DogLoading';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleLogin() {
    console.log('Email: ', email);
    console.log('Senha: ', password);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('LoginFailed');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1000)
    }, 1000);
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