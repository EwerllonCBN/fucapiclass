import React from 'react';
import { StatusBar } from 'react-native';
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
import { Routes } from './src/routes';
import { SignIn } from './src/screen/SignIn';
import { AuthProvider, useAuth } from './src/hooks/auth';
// import { Routes } from './src/routes/app.routes';
export default function App() {
  const [fontsLoaded] = useFonts({
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  });
  const {userStorageLoading} = useAuth();
  if(!fontsLoaded || userStorageLoading){
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}> 
    <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

//SocketIO
//SQLITE
//Cadastrar alunos
//Botão de incluir aluno!
//Criar uma pagina web

//Pesquisa de campo e sugestões...
//LGPD 'lei geral de proteção dos dados'

//Upload de planilhas para inclusão de alunos de forma automaticas
//Padronização dos documentos da fucapi e os padroes do aplicativo.