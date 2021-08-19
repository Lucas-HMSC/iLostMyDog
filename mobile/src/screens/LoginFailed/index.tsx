import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

export function LoginFailed() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Feather 
          name='x'
          size={80}
          color='#F5DCB4'
        />
      </View>
    </View>
  );
}