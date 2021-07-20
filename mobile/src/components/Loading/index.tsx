import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import dogAnimation from '../../assets/dog.json';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <LottieView 
        source={dogAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}