import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & { 
  title: string;
  primary?: boolean;
}

export function Button({ title, primary = false, ...rest }: Props) {
  return (
    <RectButton
      style={ 
        [styles.container, 
          primary 
          ? styles.containerPrimary 
          : styles.containerSecondary] 
      }
      { ...rest }
    >
      <Text 
        style={ 
          [styles.text, 
            primary 
            ? styles.textPrimary 
            : styles.textSecondary] 
        }
      >
        
        { title }
      </Text>
    </RectButton>
  );
}