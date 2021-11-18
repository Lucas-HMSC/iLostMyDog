import React, { useState } from 'react';
import { View, Image, Modal, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
  image: string;
}

export function DivImage({ image }: Props) {
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
            source={{ uri: `http://192.168.0.6:7999/uploads/${image}` }}
            style={styles.modalImage}
            resizeMode='contain'
          />
        </View>
      </Modal>

      <Pressable 
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={{ uri: `http://192.168.0.6:7999/uploads/${image}` }}
          style={styles.image}
          resizeMode='cover'
        />
      </Pressable>
    </View>
  );
}