import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { returnUserData } from '../../libs/storage';

import { DivPublication } from '../../components/DivPublication';
import { DogLoading } from '../../components/DogLoading';

import { api } from '../../services/api';

import { styles } from './styles';

interface PostProps {
  ID_POST: number;
  NOME: string;
  RACA: string;
  CIDADE: string;
  AREA: string;
  TELEFONE: string;
  EMAIL: string;
  ID_STATUS: number;
  PATH: string;
}

export function OthersPublications() {
  const [userId, setUserId] = useState(0);
  const [breed, setBreed] = useState(0);
  const [allPost, setAllPost] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    handleLoadUserData();
    fetchPublications();
  }, [userId, breed]);

  async function fetchPublications() {
    setLoading(true);
    const { data } = await api.get(`/raca/usuario/${userId}`);
    
    if (data[0]) {
      setBreed(Number(data[0].ID_RACA));
    }

    const { data: posts } = await api.get(`/listar/${breed}/${userId}`);
    setAllPost(posts);

    setLoading(false);
  }

  function handlePublicationView(id: number) {
    navigation.navigate('PublicationView', {  id });
  }

  async function handleLoadUserData() {
    const data = await returnUserData();
    
    if (data) {
      setUserId(data[0].Id_Usuario);
    }
  }

  if (loading) {
    return <DogLoading />
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <BorderlessButton
            style={styles.buttonBack}
            onPress={handleGoBack}
          >
            <Feather
              name='arrow-left'
              size={20}
              color='#4B3F4E'
            />
          </BorderlessButton>

          <View style={styles.content}>
            {
              allPost && allPost.map((post) => (
                <DivPublication 
                  key={post.ID_POST}
                  image={`${post.PATH}`}
                  onPress={() => handlePublicationView(post.ID_POST)}
                  dogNameOrBreed={post.NOME ? post.NOME : post.RACA}
                  lost={post.ID_STATUS === 1}
                  foundStreet={post.ID_STATUS === 2}
                  foundOwner={post.ID_STATUS === 3}
                />
              ))
            }
            {
              allPost.length === 0 && 
              (<Text>Nenhuma publicação encontrada.</Text>) 
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}