import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterClass } from "../screen/RegisterClass";
import { Dashboard } from "../screen/Dashboard";
import { SignIn } from "../screen/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();
//headerShown desabilita o cabeçalho padrão do StackNavigator.
export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name="dashboard" component={Dashboard}
      />
      <Screen 
        name="registerclass" component={RegisterClass}
      />
    </Navigator>
  )
}