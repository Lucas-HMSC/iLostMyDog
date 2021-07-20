import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import pawAnimation from '../../assets/paw.json';

import { styles } from './styles';

export function PawLoading() {
  return (
    <View style={styles.container}>
      <LottieView 
        source={pawAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}