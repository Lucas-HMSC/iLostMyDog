import React from 'react';
import { Text, View, Image } from 'react-native';

import { Button } from '../../components/Button';

import dogIcon from '../../assets/dog-icon.png';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={ dogIcon }
        style={ styles.image }
        resizeMode= 'contain'
      />

      <View style={styles.buttons}>
        <View style={styles.account}>
          <Button
            title='Entrar'
            primary
          />
          <Text style={styles.registerContainer}>
            ou {''}
            <Text style={styles.registerLink}>Cadastrar</Text>
          </Text>
        </View>

        <View style={styles.buttonContinue}>
          <Button
            title='Continuar'
          />
        </View>
      </View>
    </View>
  );
}