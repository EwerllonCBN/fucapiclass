import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import  {  Modalize  }  from  'react-native-modalize' ; 

export const Container = styled(Modalize)`
  flex: 0.6;
  background-color: #FFF;
  border-top-left-radius: ${RFValue(12)}px;
  border-top-right-radius: ${RFValue(12)}px;
`

export const Content = styled(Modalize)`
  flex: 0.6;
  background-color: #FFF;
  border-top-left-radius: ${RFValue(12)}px;
  border-top-right-radius: ${RFValue(12)}px;
`
export const Footer = styled.View`
  padding: ${RFValue(20)}px;
  color: ${({ theme })=> theme.colors.primary};
`;
export const Form = styled.View`
`;
export const Title = styled.Text`

`;

export const ModalTitle = styled.Text`
  padding-bottom: ${RFValue(20)}px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme })=> theme.fonts.regular};

  color: ${({ theme })=> theme.colors.title};
`;
export const TitleButton = styled.Text`
  color: ${({ theme })=> theme.colors.text};
  font-weight: bold;
  text-align: center;
`;