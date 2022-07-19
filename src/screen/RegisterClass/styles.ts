import styled from "styled-components/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { AntDesign, Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { FlatListProps, FlatList, Animated } from "react-native";

import { StudentListProps } from ".";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 0px;
`;

export const Header = styled.View`
  height: ${RFPercentage(18)}px;
  flex-direction: row;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const StudentList = styled(
  FlatList as new (
    props: FlatListProps<StudentListProps>
  ) => FlatList<StudentListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
export const LogoType = styled(BorderlessButton)`

  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
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
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.primary};
`;


export const Logo = styled(Feather)`
  margin-left: ${RFValue(8)}px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const TitleHeader = styled.Text`
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(22)}px;

  font-family: ${({ theme }) => theme.fonts.regular};
`
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 15px;
  background-color: red;
  margin-top: ${RFValue(31)}px;
  flex-direction: row;
  justify-content: space-between; /*Permite que fique colado nas bordas com espacamento entre eles.*/
  align-items: center;
`;

export const User = styled.View`
  margin-left: 10px;
`;

export const Footer = styled.View`
  flex: 1;
  padding: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text``;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const BackPage = styled(Feather)`
 color: ${({ theme })=> theme.colors.shape}
 
`

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
export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Status = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
export const StatusBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const StatusButton = styled(RectButton)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.sucess_light};
  Title {
    color: ${({ theme }) => theme.colors.shape};
  }
`;

export const StatusButtonFile = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${({ theme })=> theme.colors.primary};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
`;

export const StatusButtonBack = styled.TouchableOpacity`

`

export const FileDownload = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.shape};

`

export const Classes = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
