import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function Register() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView>
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

          <Text style={styles.title}>
            Dados
          </Text>
          <View style={styles.divisor} />
          <View style={styles.form}>
            <Input
              title='Nome'
              placeholder='Nome Sobrenome'
            />
            <Input
              title='E-mail'
              placeholder='email@email.com'
            />
            <Input
              title='Senha'
              password
            />
          </View>

          <View style={styles.localizationContainer}>
            <Text style={styles.title}>
              Localização
            </Text>
            <Text style={styles.textAuto}>
              Auto preencher
            </Text>
          </View>
          <View style={styles.divisor} />

          <View style={styles.form}>
            <Input
              title='Estado'
              placeholder='UF (SP, RJ, etc)'
            />
            <Input
              title='Cidade'
              placeholder='Nome da cidade'
            />
            <Input
              title='Bairro'
              placeholder='Nome do bairro'
            />
            <Input
              title='Rua'
              placeholder='Rua Logo Ali, 123'
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Criar minha conta'
              primary
            />
          </View>
      </View>
    </ScrollView>
  );
}