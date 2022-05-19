import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient,
}))`
  justify-content: center;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 20px;
`;

export const Brand = styled.Image`
  align-items: center;
  justify-content: center;
  height: 230px;
  width: 300px;
  margin-top: 54px;
  margin-bottom: 42px;
`;

export const TitleLogin = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 32px;
`;

export const ButtonForgotPassword = styled(BorderlessButton)`
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;

  align-items: center;
  flex-direction: row;

  margin-bottom: 16px;
`;
export const Footer = styled.View`
  width: 100%;
  height: 40%;
  justify-content: center;
`;
export const FooterWrapper = styled.View`
  justify-content: space-between;
`;
export const IsLoading = styled.View``;
export const ImageContainer = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: ${RFValue(16)}px;
`;

export const TitleButton = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;
