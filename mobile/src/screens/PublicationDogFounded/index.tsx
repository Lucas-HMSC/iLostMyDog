import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import { PawLoading } from '../../components/PawLoading';
import { InputImage } from '../../components/InputImage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function PublicationDogFounded() {
  const [telephone, setTelephone] = useState('');
  const [telephoneWithoutMask, setTelephoneWithoutMask] = useState(0);
  const [email, setEmail] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [pawLoading, setPawLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const check = async () => {
      await checkIfLocationIsEnabled();
    }
    check();
  }, []);

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

      setLatitude(String(latitude));
      setLongitude(String(longitude));
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

  function handleGoBack() {
    navigation.goBack();
  }

  if (pawLoading) {
    return <PawLoading />
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
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
            Nova publicação
          </Text>
          <View style={styles.divisor} />

          <View>
            <InputImage/>
          </View>

          <View>
            <View style={styles.localizationContainer}>
              <BorderlessButton 
                style={styles.textAutoContainer}
                onPress={handleAutoFill}
              >
                <Text style={styles.textAuto}>
                  preencher
                </Text>
              </BorderlessButton>
              <Input
                title='Latitude'
                placeholder='-23.2166612'
                value={latitude}
                onChangeText={(text) => setLatitude(text)}
              />
            </View>
            <Input
              title='Longitude'
              placeholder='-45.8943798'
              value={longitude}
              onChangeText={(text) => setLongitude(text)}
            />
            <Input
              title='Telefone para contato'
              placeholder='(12) 9 9999-9999'
              value={telephone}
              onChangeText={(text) => maskTelephone(text)}
            />
            <Input
              title='E-mail para contato'
              placeholder='email@email.com'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Publicar'
              primary
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}