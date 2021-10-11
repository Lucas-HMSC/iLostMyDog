import React from 'react';
import { View, Image } from 'react-native';

import ImageExample from '../../assets/teste4.jpg';

import { styles } from './styles';

export function DivImage() {
  return (
    <View style={styles.container}>
      <Image 
        source={ImageExample}
        style={styles.image}
        resizeMode='cover'
      />
    </View>
  );
}