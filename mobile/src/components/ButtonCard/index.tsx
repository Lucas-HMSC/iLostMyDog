import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

type Props = RectButtonProps & { 
  title: string;
  arrColor?: number;
}

const colors = [
  ['#E6646E', '#E5848B'],
  ['#F5DCB4', '#F1DEC0'],
  ['#4B3F4E', '#5D5360']
]

export function ButtonCard({ title, arrColor = 0, ...rest }: Props) {
  return (
    <LinearGradient
      colors={colors[arrColor]}
      style={styles.container}
    >
      <RectButton
        style={styles.container}
        { ...rest }
      >
        <Text
          style={
            [styles.text,
              arrColor === 2 ? styles.textBeige : styles.text
            ]
          }
        >
      
          { title }
        </Text>
      </RectButton>
    </LinearGradient>
  );
}