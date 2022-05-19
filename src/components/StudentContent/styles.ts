import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


interface IconProps {
  type: "presence" | "absence";
}

interface ButtonProps {
  isActive: boolean;
  title: "presence" | "absence";
}

export const Container = styled.View`
  
  padding: 10px;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 5px;
  margin-bottom: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const UserInf = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StatusCheck = styled.View`
  align-items: center;
  flex-direction: column;
`;
export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 50px;
`;

export const User = styled.View`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Student = styled.View`
  padding-left: 10px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const RAUser = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Status = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ButtonStatus = styled.TouchableOpacity`

`;

export const IconPresense = styled(MaterialCommunityIcons)<ButtonProps>`
  font-size: 45px;
  ${({ title }) => 
   title === 'presence' && css`
    color: ${({theme})=> theme.colors.sucess} 
   `}
   ${({ title }) =>
   title === 'absence' && css`
   color: ${({theme})=> theme.colors.attention}
   `}
`;