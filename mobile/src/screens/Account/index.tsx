import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export function Account() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleLogOut() {
    navigation.navigate('Home');
  }

  function handleClickRegister() {
    navigation.navigate('Register');
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
        <Text style={styles.title}>
          <Feather
            name='menu'
            size={24}
            color='#FF8087'
          />
          { '  ' }
          Menu
        </Text>
        <View style={styles.divisor} />
      </View>

      <View style={styles.content}>
        <Pressable
          onPress={handleClickRegister}
        >
          <Text style={styles.subtitle}>
            <Feather
              name='user'
              size={18}
              color='#4B3F4E'
            />
            { '  ' }
            Criar minha conta
          </Text>
        </Pressable>
      </View>

      <Pressable
        onPress={handleLogOut}
      >
        <View style={styles.divisor} />
        <Text style={styles.title}>
          <Feather
            name='log-out'
            size={24}
            color='#FF8087'
          />
          { '  ' }
          Sair
        </Text>
      </Pressable>
    </View>
  );
}