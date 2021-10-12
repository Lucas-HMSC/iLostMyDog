import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

type Props = {
  image: ImageSourcePropType;
  dogNameOrBreed: string;
  lost?: boolean;
  foundStreet?: boolean;
  foundOwner?: boolean;
}

export function DivPublication({
    image, 
    dogNameOrBreed, 
    lost = false, 
    foundStreet = false, 
    foundOwner = false
  }: Props) {
  return (
    <View style={styles.container}>
      <Image 
        source={image}
        style={styles.image}
        resizeMode='cover'
      />

      <View style={[
        styles.legend,
        lost ? styles.legendLost : styles.legend,
        foundStreet ? styles.legendFoundStreet : styles.legend,
        foundOwner ? styles.legendFoundOwner : styles.legend,
      ]}>
        <Text style={[
          styles.label,
          lost ? styles.labelLost : styles.label,
          foundStreet ? styles.labelFoundStreet : styles.label,
          foundOwner ? styles.labelFoundOwner : styles.label,
        ]}>
          { dogNameOrBreed }
        </Text>
      </View>
    </View>
  );
}