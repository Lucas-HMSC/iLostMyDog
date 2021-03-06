import React from 'react';
import { View, Image, Text, ImageSourcePropType, Pressable, PressableAndroidRippleConfig } from 'react-native';

import { styles } from './styles';

type Props = {
  image: string;
  onPress: () => void;
  dogNameOrBreed: string;
  lost?: boolean;
  foundStreet?: boolean;
  foundOwner?: boolean;
}

export function DivPublication({
    image, 
    onPress,
    dogNameOrBreed, 
    lost = false, 
    foundStreet = false, 
    foundOwner = false
  }: Props) {
  return (
    <View 
      style={styles.container}
    >
      <Pressable
        onPress={onPress}
      >
        <Image
          source={{ uri: `http://192.168.0.6:7999/uploads/${image}` }}
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
      </Pressable>
    </View>
  );
}