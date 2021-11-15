import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

import { DogLoading } from '../../components/DogLoading';
import { InputImage } from '../../components/InputImage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function PublicationDogLost() {
  const [dogName, setDogName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [telephoneWithoutMask, setTelephoneWithoutMask] = useState(0);
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<string>('');
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

  function handlePublicationView() {
    // setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    //   navigation.navigate('PublicationView');
    // }, 1000);
    console.log(image);
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

    setImage(image);
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

    setImage(image);
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
              onPress={handlePublicationView}
              primary
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}