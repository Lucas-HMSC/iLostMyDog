import React from 'react';
import { TextInput, View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  placeholder?: string;
  password?: boolean;
}

export function Input({ title, placeholder, password=false }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        { title }
      </Text>
      { 
        password 
          ? (
            <TextInput 
              style={styles.input}
              secureTextEntry
              placeholder='********'
            />
          )
          : (
            <TextInput 
              style={styles.input}
              placeholder={placeholder}
            />
          )
      }
    </View>
  );
}