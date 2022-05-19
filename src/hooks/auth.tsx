import React, { useContext, useState, createContext, ReactNode, useEffect } from "react";
import auth from '@react-native-firebase/auth'
import { Alert } from "react-native";
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscando dados sensiveis.
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AthorizationResponse{
  params: {
    access_token: string;
  },
  type: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}
type AuthProviderProps = { 
  children: ReactNode;

}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({children}: AuthProviderProps){
  const [isLogging, setIsLogging] = useState(false)
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  const userStorageKey = '@fucapiclass:user';
  async function signInWithGoogle(){
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email'); //O encodeURI troca o espaço por um simbolo legível pelo browser, assim não quebra a requisição
      const CLIENT_ID = '931699778390-0v7u8kkd0cc3d3l5kilipgeo4sj6crl1.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@ewerllon.cristian/fucapiclass';
      
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`; //Pq iremos utilizar a lib de autenticação do expo
      const {params, type} = await AuthSession
      .startAsync({ authUrl }) as AthorizationResponse; //O response ira guardar o que vai acontecer na requisição de autenticação
      
      //Fetch é proprio do javaScript pra consumir EndPoints e fazer requisição HTTP
      if(type === 'success'){
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
        const userInfo = await response.json();
        const userLogged = {
          id: String(userInfo.id!), 
          email: userInfo.email!,
          name: userInfo.given_name!,
          photo: userInfo.picture!
        }
        console.log(userInfo);
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }      
    } catch (error) {
      throw new Error(error as string)
    }
  }

  
  async function signInWithApple(){
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      });
      if(credential){
        const name = credential.fullName!.givenName!;
        const photo = `https://ui-avatars.com/api/?name=${name}&length=2`
        const userLogged = {
          id: String(credential.user), 
          email: credential.email!,
          name,
          photo,
        }
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));

        console.log(userLogged);
      }
    } catch (error) {
      throw new Error(error as string);      
    }
  }

  async function signOut(){
    setUser({} as User); 
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(() => {
    async function loadUserStorageData(){
      const userStoraged = await AsyncStorage.getItem(userStorageKey);

      if(userStoraged) setUser(JSON.parse(userStoraged));

      setUserStorageLoading(false);
    }

    loadUserStorageData();
    
  }, [])

  return(
    <AuthContext.Provider value={{
      userStorageLoading,
      signInWithGoogle,
      signInWithApple,
      signOut,
      user
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context;
}

export { AuthProvider, useAuth}

