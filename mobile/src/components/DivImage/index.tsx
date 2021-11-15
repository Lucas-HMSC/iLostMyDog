import React, { useState } from 'react';
import { View, Image, Modal, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import ImageExample from '../../assets/teste4.jpg';

import { styles } from './styles';

export function DivImage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        statusBarTranslucent
      >
        <View style={styles.modal}>
          <Pressable
            style={styles.buttonBack}
            onPress={() => setModalVisible(false)}
          >
            <Feather 
              name='x'
              size={20}
              color='#EEE'
            />
          </Pressable>
          
          <Image 
            source={ImageExample}
            style={styles.modalImage}
            resizeMode='center'
          />
        </View>
      </Modal>

      <Pressable 
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={ImageExample}
          style={styles.image}
          resizeMode='cover'
        />
      </Pressable>
    </View>
  );
}