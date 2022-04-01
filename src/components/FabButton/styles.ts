
import { RFValue } from 'react-native-responsive-fontsize';
import { Animated } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const TypeButton = styled.TouchableWithoutFeedback`

`
export const Button = styled(Animated.View)`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme })=> theme.colors.title};
  background-color: ${({theme})=> theme.colors.primary};
`;

export const ButtonUser = styled(Animated.View)`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme })=> theme.colors.title};
  background-color: ${({theme})=> theme.colors.title}; 
`;

export const ButtonTeacher = styled(Animated.View)`

  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme })=> theme.colors.title};
  background-color: ${({theme})=> theme.colors.title};
`;

