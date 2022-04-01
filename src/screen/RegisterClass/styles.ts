import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatListProps, FlatList } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 0px;
`;

export const Header = styled.View`
  height: ${RFPercentage(18)}px;
  align-items: flex-start;
  background-color: ${({ theme })=> theme.colors.primary};
`;

export const LogoType = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(65)}px;
  height: ${RFValue(50)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 15px;
  margin-top: ${RFValue(31)}px;
  flex-direction: row;
  justify-content: space-between; /*Permite que fique colado nas bordas com espacamento entre eles.*/
  align-items: center;
`;

export const User = styled.View`
  margin-left: 10px;
`;

export const Footer = styled.View`
  padding: 10px;
`;

export const UserInfo = styled.View`
flex-direction: row;
align-items: center;
`;

export const Text = styled.Text`
 
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const UserGreeting = styled.Text`
color: ${({ theme })=> theme.colors.shape};
font-size: ${RFValue(18)}px;

font-family: ${({ theme })=> theme.fonts.regular};

`;

export const UserName = styled.Text`
font-size: ${RFValue(18)}px;
color: ${({ theme })=> theme.colors.shape};

font-family: ${({ theme })=> theme.fonts.bold};
`;




export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
      contentContainerStyle:{paddingHorizontal: 24}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Classes = styled.ScrollView`
  padding:0 20px;
  margin-top: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme })=> theme.fonts.regular};
  margin-bottom: 16px;
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


