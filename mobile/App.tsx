import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular, 
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}
