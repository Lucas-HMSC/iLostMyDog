import React from 'react';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { BoxFAQ } from '../../components/BoxFAQ';

import { styles } from './styles';

const QA = [
  {
    question: 'Como realizar uma publicação?',
    answer: 'Possuindo ou não um cadastro em nosso sistema, você pode realizar uma publicação e deve preencher todos os dados para que assim a busca possa ser mais fácil, e também inserir uma foto de boa qualidade do cachorro em questão (de preferência sem a presença de outros animais).',
    hasIcon: false,
  },
  {
    question: 'Legenda das Publicações',
    answer: 'Identificam publicações de cachorros que estão perdidos.&Identificam publicações de cachorros que foram encontrados na rua.&Identificam publicações de cachorros que foram encontrados pelos respectivos donos.',
    hasIcon: true,
  },
  {
    question: 'Como encontro meu cachorro?',
    answer: 'Basta possuir uma publicação ativa do mesmo, com os dados de contato atualizados para caso alguém o encontre na rua e deseje se comunicar.',
    hasIcon: false,
  },
  {
    question: 'Como funcionam as buscas?',
    answer: 'Com base na sua publicação criada no nosso app, o algoritmo identificará a raça do seu cachorro e assim que outro usuário publicar que encontrou na rua um cachorro semelhante ao seu, você será notificado para analisar tal publicação. Todo este processo é feito automaticamente.',
    hasIcon: false,
  },
  {
    question: 'Quais raças posso publicar?',
    answer: 'Atualmente nosso algoritmo permite que imagens das seguintes raças sejam identificadas com alto índice de acerto: Rottweiler, Bulldog, Pug, Pastor Alemão e Labrador.',
    hasIcon: false,
  },
  {
    question: 'Formato de foto recomendado',
    answer: 'Para melhor visualização do cachorro, recomendados fotos horizontais (com o celular deitado).',
    hasIcon: false,
  },
]

export function FAQ() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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

          <Text style={styles.title}>
            Dúvidas Frequentes
          </Text>
          <View style={styles.divisor} />
          
          <View style={styles.content}>
            {
              QA.map((item) => (
                <View
                  style={styles.boxFAQ}
                  key={item.question}
                >
                  <BoxFAQ
                    question={item.question}
                    answer={item.answer}
                    hasIcon={item.hasIcon}
                  />
                </View>
              ))
            }
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}