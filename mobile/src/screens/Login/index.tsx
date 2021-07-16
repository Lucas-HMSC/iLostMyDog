import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function Login() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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
        />
        <Input
          title='Senha'
          password
        />
      </View>

      <View style={styles.button}>
        <Button
          title='Entrar'
          primary
        />
      </View>
    </View>
  );
}