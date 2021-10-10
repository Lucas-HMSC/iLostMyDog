import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { DogLoading } from '../../components/DogLoading';
import { Button } from '../../components/Button';

import { styles } from './styles';

export function Continue() {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoForward() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Welcome');
    }, 1000);
  }

  if (loading) {
    return <DogLoading />
  }

  return (
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

      <View>
        <Text style={styles.emoji}>
          ✋
        </Text>
        <Text style={styles.title}>
          Atenção!
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Você pode continuar sem cadastro, porém aconselhamos criar sua conta.
        </Text>
        <Text style={[styles.contentText, { marginTop: 20 }]}>
          É gratuito e rápido!
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          title='Continuar'
          onPress={handleGoForward}
        />
      </View>
    </View>
  );
}