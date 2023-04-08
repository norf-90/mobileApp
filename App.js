import React, { useCallback, useState } from 'react';
import RegistrationScreen from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Alert } from 'react-native';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isRegistrationScreenOpen, setIsRegistrationScreenOpen] = useState(true);
  const [isLoginScreenOpen, setisLoginScreenOpen] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log('fonts are loaded');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return isRegistrationScreenOpen && <RegistrationScreen />;
}
