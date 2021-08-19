import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export function LoginSuccess() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather 
          name='check'
          size={80}
          color='#4B3F4E'
        />
      </View>
    </View>
  );
}