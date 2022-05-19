import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(Modalize)``;
export const Footer = styled.View`
  padding: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const Form = styled.View`
`;
export const ModalTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.shape};
`;
export const ButtonModalize = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.title};
  margin-top: 70px;
  padding: 18px;
  border-radius: 5px;
  align-items: center;
  opacity: 0.9;
`;

export const TitleButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
