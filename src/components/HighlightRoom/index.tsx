import React from "react";
import { Alert } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Container,
  Class,
  TypeClasses,
  Title,
  Date,
  TypeButton,
  ButtonDelete,
  TeacherName,
  Content,
} from "./styles";
import { RegisterClassNavigationPros } from "../../@types/navigation";
import { useRoute } from "@react-navigation/native";

export interface HighlightRoomProps {
  title: string;
  name: string;
  date: string;
}

interface Props {
  data: HighlightRoomProps;
  onPress: () => void;
}

export function HighlightRoom({ data, onPress, ...rest }: Props) {
  
  function confirmClassDelete() {
    Alert.alert("Excluir sala", "Deseja realmente excluir esta sala ?", [
      {
        text: "Sim, excluir",
        onPress() {
          console.warn("delete");
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  return (
    <Container onPress={onPress} {...rest}>
      <>
        <Content>
          <Class>
            <TypeClasses>
              <Title>{data.title}</Title>
              <Date>{data.date}</Date>
            </TypeClasses>
            <GestureHandlerRootView>
              <TypeButton onPress={confirmClassDelete}>
                <ButtonDelete name="delete" color="black" />
              </TypeButton>
            </GestureHandlerRootView>
          </Class>
          <TeacherName>{data.name}</TeacherName>
        </Content>
      </>
    </Container>
  );
}
