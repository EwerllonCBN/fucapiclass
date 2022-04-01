import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { Dashboard } from './src/screen/Dashboard';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { RegisterClass } from './src/screen/RegisterClass';
// import { StudentRegisterModal } from './src/components/StudentRegisterModal';
import { TeacherRegisterModal } from './src/components/TeacherRegisterModal';
export default function App() {
  const [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  });
  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      < Dashboard />
    </ThemeProvider>
  );
}

