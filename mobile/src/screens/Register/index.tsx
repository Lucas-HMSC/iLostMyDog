import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleCreateAccount() {
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);
    console.log('Estado:', country);
    console.log('Cidade:', city);
    console.log('Bairro:', neighborhood);
    console.log('Rua:', street);

    navigation.navigate('Home');
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
              value={name}
              onChangeText={(text) => setName(text)}
            />
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
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
            <Input
              title='Cidade'
              placeholder='Nome da cidade'
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <Input
              title='Bairro'
              placeholder='Nome do bairro'
              value={neighborhood}
              onChangeText={(text) => setNeighborhood(text)}
            />
            <Input
              title='Rua'
              placeholder='Rua Logo Ali, 123'
              value={street}
              onChangeText={(text) => setStreet(text)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Criar minha conta'
              primary
              onPress={handleCreateAccount}
            />
          </View>
      </View>
    </ScrollView>
  );
}