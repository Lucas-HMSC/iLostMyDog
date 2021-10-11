import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { DivImage } from '../../components/DivImage';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function PublicationView() {
  const [dogName, setDogName] = useState('Mike');
  const [dogBreed, setDogBreed] = useState('Pastor Alemão');
  const [city, setCity] = useState('São José dos Campos');
  const [lat, setLat] = useState('-23.2166612');
  const [long, setLong] = useState('-45.8943798');
  const [telephone, setTelephone] = useState('(12) 9 9999-9999');
  const [email, setEmail] = useState('email@email.com');

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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
            <DivImage/>
          </View>

          <View style={styles.inputGroup}>
            <Input
              title='Nome'
              placeholder=''
              value={dogName}
              onChangeText={(text) => setDogName(text)}
              disabled
            />

            <Input
              title='Raça'
              placeholder=''
              value={dogBreed}
              onChangeText={(text) => setDogBreed(text)}
              disabled
            />
          </View>

          <Text style={styles.title}>
            Última localização
          </Text>
          <View style={styles.divisor} />

          <View 
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
          </View>

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
            <Input
              title='Telefone'
              placeholder=''
              value={telephone}
              onChangeText={(text) => setTelephone(text)}
              disabled
            />

            <Input
              title='Email'
              placeholder=''
              value={email}
              onChangeText={(text) => setEmail(text)}
              disabled
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}