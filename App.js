import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation/AppNavigator';
import { Asset } from 'expo-asset';

const App = () => {
  const [areFontsLoaded, setAreFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'AvertaStd-Semibold': require('./assets/fonts/AvertaStd-Semibold.otf'),
      'AvertaStd-Regular': require('./assets/fonts/AvertaStd-Regular.otf'),
    }).then(() => setAreFontsLoaded(true));
  }, []);

  if (!areFontsLoaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
