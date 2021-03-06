import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { saveUserData } from '../../libs/storage';

import { DogLoading } from '../../components/DogLoading';
import { PawLoading } from '../../components/PawLoading';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { styles } from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [telephoneWithoutMask, setTelephoneWithoutMask] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [dogLoading, setDogLoading] = useState(false);
  const [pawLoading, setPawLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    const check = async () => {
      await checkIfLocationIsEnabled();
    }
    check();
  }, []);

  async function handleCreateAccount() {
    const newUser = {
      nome: name,
      telefone: telephoneWithoutMask,
      email: email,
      senha: password,
      area: `${latitude},${longitude}`,
      cidade: city
    };
    
    setPawLoading(true);
    await api
      .post('/cadastro', newUser)
      .then((response) => {
        if (response.status === 201) {
          setPawLoading(false)
          Alert.alert(
            'Sucesso!',
            `Conta criada, ${name}!`,
            [{
              text: 'Certo 🐕!',
              onPress: () => navigation.navigate('Welcome')
            }]
          );

          handleSaveUserData(response.data.id_usuario);
        } else throw new Error;
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(
          'Oh não :(',
          'Houve um problema e não foi possível criar sua conta.',
          [{
            text: 'Tentar novamente'
          }]
        );
      })
      .finally(() => setPawLoading(false))
  }

  async function handleSaveUserData(id_usuario: Number) {
    const { data } = await api.post('/usuario', { id_usuario });
    const userData = data.response;
    
    saveUserData(userData);
  }

  async function handleAutoFill() {
    if (locationServiceEnabled) await getCurrentLocation();
  }

  async function checkIfLocationIsEnabled() {
    const isEnabled = await Location.hasServicesEnabledAsync();

    if (!isEnabled) {
      Alert.alert(
        'Localização desativada',
        'Por favor, ative seu serviço de localização para continuar',
        [{ 
          text: 'OK',
          onPress: () => {
            navigation.navigate('Home');
          }
        }],
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

    setPawLoading(true);

    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High
    });

    if (coords) {
      const { latitude, longitude } = coords;
      
      const address = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setLatitude(String(latitude));
      setLongitude(String(longitude));
      setCity(address[0].subregion || '');
    }

    setPawLoading(false);
  }

  function maskTelephone(text: string) {
    setTelephone(text.replace(/\D/g, ''));
    if (text.length === 11) {
      setTelephoneWithoutMask(Number(text));
      setTelephone(text.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '($1) $2 $3-$4'));
    } else if (text.length > 11) {
      setTelephone(text.slice(0, 16));
    }
  }

  if (dogLoading) {
    return <DogLoading />
  }

  if (pawLoading) {
    return <PawLoading />
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollview}
    >
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
              title='Telefone'
              placeholder='(12) 9 9999-9999'
              value={telephone}
              onChangeText={(text) => maskTelephone(text)}
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
                preencher
              </Text>
            </BorderlessButton>
          </View>
          <View style={styles.divisor} />

          <View style={styles.form}>
            <Input
              title='Latitude'
              placeholder='-23.2166612'
              value={latitude}
              onChangeText={(text) => setLatitude(text)}
            />
            <Input
              title='Longitude'
              placeholder='-45.8943798'
              value={longitude}
              onChangeText={(text) => setLongitude(text)}
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