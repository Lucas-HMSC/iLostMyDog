import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { DogLoading } from '../../components/DogLoading';
import { DivImage } from '../../components/DivImage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import { styles } from './styles';

interface RouteProps {
  id: number;
}

export function PublicationView() {
  const [postId, setPostId] = useState(0);
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleClickDisable() {
    Alert.alert('Desativar', 'Escolha uma das opções abaixo:', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Cachorro Encontrado',
        onPress: () => console.log(''),
      },
      { 
        text: 'Excluir Publicação', 
        onPress: () => console.log(''),
      },
    ]);
  }

  async function fetchPublication() {
    setLoading(true);
    const { id } = route.params as RouteProps;
    if (id > 0) {
      try {
        setPostId(id);
        const { data } = await api.get(`/listar/${postId}`);
        if (data) {
          setDogName(data[0].NOME ? data[0].NOME : '');
          setDogBreed(data[0].RACA);
          setCity(data[0].CIDADE !== 'undefined' ? data[0].CIDADE : '');
          setLat(data[0].AREA !== 'undefined' ? data[0].AREA.split(',')[0] : '');
          setLong(data[0].AREA !== 'undefined' ? data[0].AREA.split(',')[1] : '');
          setTelephone(data[0].TELEFONE ? data[0].TELEFONE : '');
          setEmail(data[0].EMAIL ? data[0].EMAIL : '');
          setImageURL(data[0].PATH ? data[0].PATH : '');
        }
      } catch(e) {
        console.log(e);
      } 
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPublication();
  }, [postId])

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
            {
              dogName || dogBreed
            }
          </Text>
          <View style={styles.divisor} />

          <View>
            <DivImage image={ imageURL }/>
          </View>

          <View style={styles.inputGroup}>
            {
              dogName !== '' &&
              (<Input
                title='Nome'
                placeholder=''
                value={dogName}
                onChangeText={(text) => setDogName(text)}
                disabled
              />)
            }

            { 
              dogBreed !== '' && 
              (
                <Input
                title='Raça'
                placeholder=''
                value={dogBreed}
                onChangeText={(text) => setDogBreed(text)}
                disabled
              />
              )
            }
          </View>

          <Text style={styles.title}>
            Última localização
          </Text>
          <View style={styles.divisor} />

          {
            city !== '' &&
          (<View 
            style={[
              styles.inputGroup,
              styles.fixMargin
            ]}
          >
            <Input
              title='Cidade'
              placeholder=''
              value={city}
              onChangeText={(text) => setCity(text)}
              disabled
            />

            <Input
              title='Latitude'
              placeholder=''
              value={lat}
              onChangeText={(text) => setLat(text)}
              disabled
            />

            <Input    
              title='Longitude'
              placeholder=''
              value={long}
              onChangeText={(text) => setLong(text)}
              disabled
            />
          </View>)}

          {
            city === '' &&
          (<View 
            style={[
              styles.inputGroup,
              styles.fixMargin
            ]}
          >
            <Input
              title='Dados'
              placeholder=''
              value={'Não informado.'}
              onChangeText={() => {}}
              disabled
            />
          </View>)}

          <Text style={styles.title}>
            Contato
          </Text>
          <View style={styles.divisor} />

          <View 
            style={[
              styles.inputGroup,
              styles.fixMargin
            ]}
          >
            {
              telephone !== '' &&
            (<Input
              title='Telefone'
              placeholder=''
              value={telephone}
              onChangeText={(text) => setTelephone(text)}
              disabled
            />)}

            {
              email !== '' &&
            (<Input
              title='Email'
              placeholder=''
              value={email}
              onChangeText={(text) => setEmail(text)}
              disabled
            />)}
          </View>

          <View style={styles.buttonContainer}>
            {/* <Button
              title='DESATIVAR'
              primary
              onPress={() => handleClickDisable()}
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}