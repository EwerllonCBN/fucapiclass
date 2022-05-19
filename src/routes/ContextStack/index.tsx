import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterClass } from "../../screen/RegisterClass";
import { Dashboard } from "../../screen/Dashboard";
const { Navigator, Screen} = createStackNavigator();

export function ContextStack(){
  return(
    <Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="RegisterClass" component={RegisterClass} />
    </Navigator>
  )
}