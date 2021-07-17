import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button';

import dogIcon from '../../assets/dog-icon.png';

import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleClickLogin() {
    navigation.navigate('Login');
  }

  function handleClickRegister() {
    navigation.navigate('Register');
  }

  function handleClickContinue() {
    navigation.navigate('Continue');
  }

  return (
    <View style={styles.container}>
      <Image 
        source={ dogIcon }
        style={ styles.image }
        resizeMode= 'contain'
      />

      <View>
        <View>
          <Button
            title='Entrar'
            primary
            onPress={handleClickLogin}
          />
          <TouchableWithoutFeedback
            onPress={handleClickRegister}
          >
            <Text style={styles.registerContainer}>
              ou {''}
              <Text style={styles.registerLink}>Cadastrar</Text>
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.buttonContinue}>
          <Button
            title='Continuar'
            onPress={handleClickContinue}
          />
        </View>
      </View>
    </View>
  );
}