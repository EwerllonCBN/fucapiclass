import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  background-color: ${({ theme })=> theme.colors.primary};
  margin-top: 50px;
  padding: 18px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  
  font-family: ${({ theme })=> theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme })=> theme.colors.shape};

`;