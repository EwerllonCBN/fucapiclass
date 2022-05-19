import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  background-color: ${({ theme })=> theme.colors.background};
  margin-bottom: ${RFValue(10)}px;
`;
export const Content = styled.View`
  padding: 10px ;
  background-color: white;
  border-radius: 5px;
`;
export const Class = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(40)}px;
`;
export const TypeClasses = styled.View`
  flex-direction: column;
`;
export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const TypeButton = styled(BorderlessButton)``;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const SemesterDate = styled.Text``;
export const ButtonDelete = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(25)}px;
`;
export const TeacherName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
