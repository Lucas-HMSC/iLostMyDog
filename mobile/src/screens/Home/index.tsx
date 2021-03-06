import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../../components/Button';

import dogIcon from '../../assets/dog-icon.png';
import dogTitle from '../../assets/dog-title.png';

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
      <View>
        <Image
          source={ dogIcon }
          style={ styles.image }
          resizeMode= 'contain'
        />
        <Image
          source={ dogTitle }
          style={ styles.imageTitle }
          resizeMode= 'contain'
        />
      </View>

      <View>
        <View>
          <Button
            title='Entrar'
            primary
            onPress={handleClickLogin}
          />
          <TouchableOpacity
            onPress={handleClickRegister}
          >
            <Text style={styles.registerContainer}>
              ou {''}
              <Text style={styles.registerLink}>Cadastrar</Text>
            </Text>
          </TouchableOpacity>
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