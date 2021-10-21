import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
  question: string;
  answer: string;
  hasIcon: boolean
}

export function BoxFAQ({ question, answer, hasIcon }: Props) {
  return (
    <View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          { question }
        </Text>

        <Feather
          name='arrow-down'
          size={16}
          color='#4B3F4E'
        />
      </View>

      <View style={styles.answerContainer}>
          { 
            hasIcon ? 
            (
              answer.split('&').map((item, index) => (
                <View 
                  style={styles.iconContainer}
                  key={index}
                >
                  <Text style={[styles.answer]}>
                    <View style={
                        [
                          index === 0 ? styles.icon0 : styles.icon,
                          index === 1 ? styles.icon1 : styles.icon,
                          index === 2 ? styles.icon2 : styles.icon,
                        ]
                      } 
                    />
                    { ' ' }
                    { item }
                  </Text>
                </View>
              ))
            ) 
              :  
            (
              <Text style={styles.answer}>
                { answer }
              </Text>
            )
          }
      </View>
    </View>
  );
}