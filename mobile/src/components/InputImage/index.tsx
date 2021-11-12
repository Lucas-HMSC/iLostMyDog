import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
  image: string;
  handleSelectImage: (pointerInside: boolean) => void;
}

export function InputImage({ image, handleSelectImage }: Props) {
  return (
    <BorderlessButton
      style={styles.button}
      onPress={handleSelectImage}
    >
      <View style={styles.container}>
        {
          image !== '' ?
            <Image 
              style={styles.image}
              source={{ uri: image }}
              resizeMode='cover'
            /> : 
            <Feather
              name='image'
              size={24}
              color='#5D5360'
            />
        }
      </View>
    </BorderlessButton>
  );
}