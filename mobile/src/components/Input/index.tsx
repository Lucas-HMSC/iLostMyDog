import React from 'react';
import { TextInput, View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  placeholder?: string;
  password?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

export function Input({ title, placeholder, password=false, value, onChangeText }: Props) {
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
              value={value}
              onChangeText={onChangeText}
            />
          )
          : (
            <TextInput 
              style={styles.input}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
            />
          )
      }
    </View>
  );
}