import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { returnUserData } from '../../libs/storage';

import { PawLoading } from '../../components/PawLoading';
import { DogLoading } from '../../components/DogLoading';
import { InputImage } from '../../components/InputImage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { styles } from './styles';

export function PublicationDogFound() {
  const [userId, setUserId] = useState(0);
  const [telephone, setTelephone] = useState('');
  const [telephoneWithoutMask, setTelephoneWithoutMask] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<string[]>([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [pawLoading, setPawLoading] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setTelephoneWithoutMask(text);
      setTelephone(text.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g, '($1) $2 $3-$4'));
    } else if (text.length > 11) {
      setTelephone(text.slice(0, 16));
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSelectGalery() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImage([image]);
  }

  async function handleSelectCamera() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso à sua camera...');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImage([image]);
  }

  function handleSelectGaleryOrCamera() {
    Alert.alert('Adicionar imagem', 'Deseja adicionar uma imagem da galeria ou abrir a camera?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Galeria',
        onPress: () => handleSelectGalery(),
      },
      { 
        text: 'Camera', 
        onPress: () => handleSelectCamera(),
      },
    ]);
  }

  function handlePublicationView(id: number) {
    navigation.navigate('PublicationView', {  id });
  }

  async function handleCreatePublication() {
    setLoading(true);

    const data = new FormData();
    data.append('nome_cao', '');
    data.append('area', `${latitude},${longitude}`);
    data.append('cidade', city);
    data.append('email', email);
    data.append('telefone', telephoneWithoutMask);
    data.append('id_status', '2');
    data.append('user_id', userId > 0 ? `${userId}` : '1');

    image.forEach((image) => {
      data.append('images', {
        name: `image_sem-nome.jpg`,
        type: 'image/jpg',
        uri: image
      } as any)
    });
    
    const response = await api.post('/add', data);
    if (response.status === 201) {
      handlePublicationView(Number(response.data.id_post))
    }

    setLoading(false);
  }

  useEffect(() => {
    handleLoadUserData()
  }, []);

  async function handleLoadUserData() {
    const data = await returnUserData();
    
    if (data) {
      setEmail(data[0].Email);
      setTelephoneWithoutMask(data[0].Telefone);
      setLatitude((data[0].Area).split(',')[0]);
      setLongitude((data[0].Area).split(',')[1]);
      setCity(data[0].Cidade);
      setUserId(data[0].Id_Usuario);
    }
  }

  if (pawLoading) {
    return <PawLoading />
  }

  if (loading) {
    return <DogLoading />
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
            <InputImage 
              image={image}
              handleSelectImage={handleSelectGaleryOrCamera}
            />
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
              value={telephone || telephoneWithoutMask}
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
              onPress={handleCreatePublication}
              primary
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}