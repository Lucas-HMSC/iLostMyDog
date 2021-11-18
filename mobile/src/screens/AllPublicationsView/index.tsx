import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

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

export function AllPublicationsView() {
  const [allPost, setAllPost] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetchPublications();
  }, []);

  async function fetchPublications() {
    setLoading(true);
    const response = await api.get('/listar');
    setLoading(false);
    setAllPost(response.data);
  }

  function handlePublicationView(id: number) {
    navigation.navigate('PublicationView', {  id });
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}