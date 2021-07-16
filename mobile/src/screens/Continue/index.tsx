import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Continue() {
  return (
    <View style={styles.container}>
      <Text>
        Tela de Aviso para Continuar sem cadastro
      </Text>
    </View>
  );
}