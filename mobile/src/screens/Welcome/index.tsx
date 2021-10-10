import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { ButtonCard } from '../../components/ButtonCard';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Welcome() {

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
            >
              <Feather
                name='user'
                size={25}
                color='#FF8087'
              />
            </BorderlessButton>
          </View>

          <View style={styles.buttonCardContainer}>
            <ButtonCard
              title='Publicar'
              arrColor={0}
            />
            <ButtonCard
              title='Minhas Publicações'
              arrColor={1}
            />
            <ButtonCard
              title='Outras Publicações'
              arrColor={2}
              
            />
            <ButtonCard
              title='Todas as Publicações'
              arrColor={2}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title='Dúvidas'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}