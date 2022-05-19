import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ContextStack } from "./ContextStack";
import { AppRoutes } from "./app.stack.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
//headerShown desabilita o cabeçalho padrão do StackNavigator.
export function Routes(){
  const { user } = useAuth();
  return(
    <NavigationContainer>
      { user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
