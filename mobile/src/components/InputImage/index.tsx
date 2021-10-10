import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export function InputImage() {
  return (
    <BorderlessButton
      style={styles.button}
    >
      <View style={styles.container}>
        <Feather
          name='image'
          size={24}
          color='#5D5360'
        />
      </View>
    </BorderlessButton>
  );
}