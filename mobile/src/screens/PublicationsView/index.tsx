import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { DivPublication } from '../../components/DivPublication';

import ImageExample1 from '../../assets/teste1.jpg';
import ImageExample2 from '../../assets/teste2.jpg';
import ImageExample3 from '../../assets/teste3.jpg';
import ImageExample4 from '../../assets/teste4.jpg';
import ImageExample5 from '../../assets/teste5.jpg';

import { styles } from './styles';

export function PublicationsView() {
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

          <View style={styles.content}>
            <DivPublication 
              image={ImageExample4}
              dogNameOrBreed='Mike'
              lost
            />
            
            <DivPublication 
              image={ImageExample3}
              dogNameOrBreed='Thor'
              lost
            />

            <DivPublication 
              image={ImageExample2}
              dogNameOrBreed='Bulldog'
              foundStreet
            />

            <DivPublication 
              image={ImageExample5}
              dogNameOrBreed='Bob'
              lost
            />

            <DivPublication 
              image={ImageExample1}
              dogNameOrBreed='Rottweiler'
              foundOwner
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}