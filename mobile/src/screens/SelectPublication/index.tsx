import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { ButtonCard } from '../../components/ButtonCard';

import { styles } from './styles';

export function SelectPublication() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  
  return (
    <View
      style={styles.container}
    >
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

      <ButtonCard 
        title={`Encontrei um cachorro`}
      />

      <ButtonCard 
        title={`Perdi um cachorro`}
      />
    </View>
  );
}