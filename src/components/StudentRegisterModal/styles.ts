import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";

export const Container = styled(ScrollView)`
  margin-top: 20px;
  padding: 20px;
  color: ${({ theme })=> theme.colors.primary};

`;
export const Form = styled.View`

`;
export const Title = styled.Text`

`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme })=> theme.fonts.regular};

  color: ${({ theme })=> theme.colors.title};
`;
// export const TextInput = styled(TextInput)`
//   height: 40;
//   width: 100%;
//   border-radius: 5;
//   border-color: #ccc;
//   border-width: 1;
//   margin-bottom: 10;
// `;

export const TitleButton = styled.Text`
  color: ${({ theme })=> theme.colors.text};
  font-weight: bold;
  text-align: center;
`;