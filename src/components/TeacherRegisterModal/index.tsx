import React, { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import * as Yup from "yup";
import { InputForm } from "../InputForm";
import uuid from "react-native-uuid";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Content,
  TitleButton,
  Form,
  ModalTitle,
  Footer,
  ButtonModalize,
} from "./styles";
import { Alert } from "react-native";

import { Modalize } from "react-native-modalize";

interface ModalizeProps {
  modalizeTeacherRef: any;
  onClose: any;
}

export type FormData = {
  [name: string]: any;
};

export interface formDataProps {
  id: string;
  name: string;
  title: string;
  date: string;
  type: "teacher";
}

const schema = Yup.object({
  name: Yup.string().required("Nome do docente obrigatório!"),
  title: Yup.string().required("Título da sala obrigatório!"),
});

export function TeacherRegisterModal({ modalizeTeacherRef, onClose }: ModalizeProps) {
  const { user } = useAuth();
  const collectionKey = `@fucapiclass: registerClass_user: ${user.id}`;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formDataProps>({
    resolver: yupResolver(schema),
  });
  async function handleRegister(form: formDataProps) {
    const newData = {
      id: String(uuid.v4()),
      name: form.name,
      title: form.title,
      date: new Date(),
      type: form.type,
    };
    console.log("dados:  ", form);
    try {
      const data = await AsyncStorage.getItem(collectionKey);
      const currentData = data ? JSON.parse(data) : [];

      // firestore()
      //   .collection("turmas")
      //   .add(newData)
      //   .then(() => Alert.alert("Registro", "Sala cadastrada com sucesso"))
      //   .catch(() =>
      //     Alert.alert("Registro", "Não foi possível cadastrar sala!")
      //   );

      const dataFormated = [...currentData, newData];
      await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormated));

      reset();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível criar sala!");
    }
  }

  // useEffect(()=> {
  //   async function loadData(){
  //     const data1 = await AsyncStorage.getItem(collectionKey);

  //     console.log(JSON.parse(data1!));
  //   }
  //   loadData()

  //   async function removeAll(){
  //     await AsyncStorage.removeItem(collectionKey);
  //   }
  //   removeAll()
  // }, [])

  return (
    
    <Container>
      
      <Content
        onClose={onClose}
        handlePosition="outside"
        modalStyle={{ backgroundColor: "#5e89ff" }}
        handleStyle={{ backgroundColor: "#5e89ff" }}
        modalHeight={370}
        scrollViewProps={{
          scrollEnabled: false,
          showsVerticalScrollIndicator: false,
          showsHorizontalScrollIndicator: false,
        }}
        ref={modalizeTeacherRef}
      >
        <GestureHandlerRootView>
          <Footer>
          <ModalTitle>Crie uma nova sala</ModalTitle>
          <Form>
            <InputForm
              name="name"
              control={control}
              placeholder="Docente"
              placeholderTextColor='#969CB2'
              autoCapitalize="sentences"
              autoCorrect={false}
              maxLength={40}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="title"
              control={control}
              placeholder="Título da turma"
              placeholderTextColor='#969CB2'
              autoCapitalize="sentences"
              autoCorrect={false}
              maxLength={30}
              error={errors.title && errors.title.message}
            />
          </Form>

          <ButtonModalize onPress={handleSubmit(handleRegister)}>
            <TitleButton>Criar sala</TitleButton>
          </ButtonModalize>
        </Footer>
        </GestureHandlerRootView>
        
      </Content>
    </Container>
  );
}
