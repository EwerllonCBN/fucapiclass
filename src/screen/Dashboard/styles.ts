import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatList, FlatListProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Animated } from "react-native";

import { ClassesListProps } from '.';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 0px;
`;

export const Header = styled.View`
  height: ${RFPercentage(18)}px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 15px;
  margin-top: ${RFValue(35)}px;
  flex-direction: row;
  justify-content: space-between; /*Permite que fique colado nas bordas com espacamento entre eles.*/
  align-items: center;
`;

export const User = styled.View`
  margin-left: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Footer = styled.View`
  flex: 1;
`;
export const LogoutButton = styled(BorderlessButton)``;

export const ClassButton = styled(BorderlessButton)`
  width: 70px;
  height: 70px;
  border-radius: ${RFValue(25)}px;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
`;

export const AddIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(60)}px;
`;

export const Classes = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 16px;
`;

export const ClassesList = styled(
  FlatList as new (
    props: FlatListProps<ClassesListProps>
  ) => FlatList<ClassesListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerFab = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

export const TypeButton = styled.TouchableWithoutFeedback``;
export const Button = styled(Animated.View)`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonUser = styled(Animated.View)`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.title};
`;

export const ButtonTeacher = styled(Animated.View)`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.title};
`;
