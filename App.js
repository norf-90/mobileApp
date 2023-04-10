import React, { useCallback, useState } from 'react';
import RegistrationScreen from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Alert } from 'react-native';
import LoginScreen from './Screens/LoginScreen';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isRegistrationScreenOpen, setIsRegistrationScreenOpen] = useState(false);
  const [isLoginScreenOpen, setisLoginScreenOpen] = useState(true);

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  const showLogScreen = () => {
    setIsRegistrationScreenOpen(false);
    setisLoginScreenOpen(true);
  };

  const showRegScreen = () => {
    setIsRegistrationScreenOpen(true);
    setisLoginScreenOpen(false);
  };

  return (
    <>
      {isRegistrationScreenOpen && <RegistrationScreen showLogScreen={showLogScreen} />}
      {isLoginScreenOpen && <LoginScreen showRegScreen={showRegScreen} />}
    </>
  );
}
