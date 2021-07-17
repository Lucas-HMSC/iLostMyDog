import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';

import { styles } from './styles';

export function Continue() {
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

      <View>
        <Text style={styles.emoji}>
          ✋
        </Text>
        <Text style={styles.title}>
          Atenção!
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Você pode continuar sem cadastro, porém aconselhamos criar sua conta.
        </Text>
        <Text style={[styles.contentText, { marginTop: 20 }]}>
          É gratuito e rápido!
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          title='Continuar'
        />
      </View>
    </View>
  );
}