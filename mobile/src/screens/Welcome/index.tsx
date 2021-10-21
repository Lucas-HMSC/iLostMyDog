import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { ButtonCard } from '../../components/ButtonCard';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Welcome() {
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

  function handleFAQ() {
    navigation.navigate('FAQ');
  }

  return (
    <SafeAreaView style={styles.scrollview}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Bem-vindo!
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
              onPress={handlePublicationsView}
            />
            <ButtonCard
              title='Outras Publicações'
              arrColor={2}
              onPress={handlePublicationsView}
            />
            <ButtonCard
              title='Todas as Publicações'
              arrColor={2}
              onPress={handlePublicationsView}
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