import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Loading } from '../../components/Loading';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Username() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoForward() {
    console.log('Nome:', username);

    Alert.alert(
      'Sucesso!',
      `Seja bem-vindo(a) ${username}!`,
      [{
        text: 'Certo 🐕!',
        onPress: () => {
          setLoading(true);

          setTimeout(() => {
            setLoading(false);
            navigation.navigate('Home');
          }, 1000);
        }
      }]
    );
  }

  if (loading) {
    return <Loading />
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
        value={username}
        onChangeText={(text) => setUsername(text)}
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