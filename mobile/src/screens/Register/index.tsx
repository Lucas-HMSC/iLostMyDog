import React, { useState } from 'react';
import { Text, View, ScrollView, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleCreateAccount() {
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);
    console.log('Estado:', region);
    console.log('Cidade:', city);
    console.log('Bairro:', neighborhood);
    console.log('Rua:', street);

    navigation.navigate('Home');
  }

  async function handleAutoFill() {
    checkIfLocationIsEnabled();

    if (locationServiceEnabled) getCurrentLocation();
  }

  async function checkIfLocationIsEnabled() {
    const isEnabled = await Location.hasServicesEnabledAsync();

    if (!isEnabled) {
      Alert.alert(
        'Localização desativada',
        'Por favor, ative seu serviço de localização para continuar',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(isEnabled);
    }
  }

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permissão negada',
        'É necessário conceder a permissão :(',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;

      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setRegion(response[0].region || '');
      setCity(response[0].subregion || '');
      setNeighborhood(response[0].district || '');
      setStreet(response[0].street || '');
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
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
            <BorderlessButton onPress={handleAutoFill}>
              <Text style={styles.textAuto}>
                Auto preencher
              </Text>
            </BorderlessButton>
          </View>
          <View style={styles.divisor} />

          <View style={styles.form}>
            <Input
              title='Estado'
              placeholder='UF (SP, RJ, etc)'
              value={region}
              onChangeText={(text) => setRegion(text)}
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
      </SafeAreaView>
    </ScrollView>
  );
}