import React from "react";
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
} from './styles';



export function HighlightRoom(){
  return(
    <Container>
      <Class>
        <TypeClasses>
          <Title>Controle e Servo Mecanismo</Title>
          <Date>2020/1</Date>
        </TypeClasses>
        <GestureHandlerRootView>
          <TypeButton>
            <ButtonDelete name='delete' color='black'/>
          </TypeButton>
        </GestureHandlerRootView>
      </Class>
      <TeacherName>Alexandre Martiniano</TeacherName>     
    </Container>
  )
}