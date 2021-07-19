import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';

import { styles } from './styles';

export function Username() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoForward() {
    navigation.navigate('Home');
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

      <Text style={styles.text}>
        Como podemos chamar você?
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Digite um nome'
      />

      <View style={styles.button}>
        <Button 
          title='Continuar'
          onPress={handleGoForward}
        />
      </View>
    </View>
  );
}