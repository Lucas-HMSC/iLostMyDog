import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { returnUserData } from '../../libs/storage';

import { ButtonCard } from '../../components/ButtonCard';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Welcome() {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  function handleMenuAccount() {
    navigation.navigate('Account');
  }

  function handleSelectPublication() {
    navigation.navigate('PublicationSelect');
  }

  function handlePublicationsView() {
    navigation.navigate('PublicationsView');
  }

  function handleAllPublicationsView() {
    navigation.navigate('AllPublicationsView');
  }

  function handleMyPublications() {
    navigation.navigate('MyPublications');
  }

  function handleOthersPublications() {
    navigation.navigate('OthersPublications');
  }

  function handleFAQ() {
    navigation.navigate('FAQ');
  }

  useEffect(() => {
    handleLoadUserData()
  }, []);

  async function handleLoadUserData() {
    const data = await returnUserData();
    
    if (data) setUsername((data[0].Nome).split(' ')[0]);
    
    // console.log(data[0].Nome);
  }

  return (
    <SafeAreaView style={styles.scrollview}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {
                username ? `Bem vindo, ${username}!` : 'Bem-vindo!'
              }
            </Text>
            <BorderlessButton
              style={styles.buttonAccount}
              onPress={handleMenuAccount}
            >
              <Feather
                name='menu'
                size={25}
                color='#FF8087'
              />
            </BorderlessButton>
          </View>

          <View style={styles.buttonCardContainer}>
            <ButtonCard
              title='Publicar'
              arrColor={0}
              onPress={handleSelectPublication}
            />
            <ButtonCard
              title='Minhas Publicações'
              arrColor={1}
              onPress={handleMyPublications}
            />
            <ButtonCard
              title='Outras Publicações'
              arrColor={2}
              onPress={handleOthersPublications}
            />
            <ButtonCard
              title='Todas as Publicações'
              arrColor={2}
              onPress={handleAllPublicationsView}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title='Dúvidas'
              onPress={handleFAQ}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}