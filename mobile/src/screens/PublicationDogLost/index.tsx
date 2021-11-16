import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { returnUserData } from '../../libs/storage';

import { DogLoading } from '../../components/DogLoading';
import { InputImage } from '../../components/InputImage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { styles } from './styles';

export function PublicationDogLost() {
  const [userId, setUserId] = useState(0);
  const [dogName, setDogName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [telephoneWithoutMask, setTelephoneWithoutMask] = useState(0);
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

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

  async function handleCreatePublication() {
    setLoading(true);

    const data = new FormData();
    data.append('nome_cao', dogName);
    data.append('id_status', '1');
    data.append('user_id', userId > 0 ? `${userId}` : '1');

    image.forEach((image) => {
      data.append('images', {
        name: `image_${dogName}.jpg`,
        type: 'image/jpg',
        uri: image
      } as any)
    });

    const response = await api.post('/add', data);

    setLoading(false);
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

  useEffect(() => {
    handleLoadUserData()
  }, []);

  async function handleLoadUserData() {
    const data = await returnUserData();
    
    if (data) {
      setEmail(data[0].Email);
      setTelephone(data[0].Telefone);
      setUserId(data[0].Id_Usuario);
    }
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
            <Input
              title='Nome do cachorro'
              placeholder='Doguinho'
              value={dogName}
              onChangeText={(text) => setDogName(text)}
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
              onPress={handleCreatePublication}
              primary
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}