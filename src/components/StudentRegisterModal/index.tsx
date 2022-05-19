import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { InputForm } from "../InputForm";
import uuid from 'react-native-uuid';
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Content,
  Form,
  ModalTitle,
  Footer,
  ButtonModalize,
  TitleButton,
} from "./styles";
import * as Yup from "yup";
import { IStudentProps } from "../StudentContent";
import { Alert } from "react-native";
import { useAuth } from "../../hooks/auth";

interface ModalizeProps {
  modalizeStudentRef: any;
}

interface typeIcon extends IStudentProps {
  icon: 'presence' | 'absence'
}

export type FormData = {
  [name: string]: any;
};

interface formDataProps {
  name: string;
  ra: string;
  type: typeIcon;
}

const schema = Yup.object().shape({
  name: Yup.string().required("O nome do aluno é obrigatório"),
  ra: Yup.string().required("O RA é obrigatório"),
});
export function StudentRegisterModal({ modalizeStudentRef }: ModalizeProps) { 
  const { user } = useAuth();
  const collectionKey = `@fucapiclass: registerStudent_user: ${user.id}`;

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
      ra: form.ra,
      type: form.type
    };
    console.log("dados:  ", form);
    try {
      const data = await AsyncStorage.getItem(collectionKey);
      const currentData =  data ? JSON.parse(data) : [];

      const dataFormated = [
        ...currentData,
        newData
      ]
      await AsyncStorage.setItem(collectionKey, JSON.stringify(dataFormated));

      reset();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível criar sala!")
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
    <GestureHandlerRootView>
      <Container>
        <Content
          modalStyle={{ backgroundColor: "#5e89ff" }}
          handleStyle={{ backgroundColor: "#5e89ff" }}
          modalHeight={370}
          panGestureComponentEnabled={true}
          scrollViewProps={{
            scrollEnabled: false,
            showsVerticalScrollIndicator: false,
            showsHorizontalScrollIndicator: false,
          }}
          ref={modalizeStudentRef}
        >
          <Footer>
            <ModalTitle>Adicione um aluno em sua sala</ModalTitle>
            <Form>
              <InputForm
                name="name"
                control={control}
                placeholder="Nome do aluno"
                placeholderTextColor='#969CB2'
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />
              <InputForm
                name="ra"
                autoCapitalize="sentences"
                autoCorrect={false}
                control={control}
                placeholder="RA"
                placeholderTextColor='#969CB2'
                keyboardType="numeric"
                error={errors.ra && errors.ra.message}
              />
            </Form>
            <ButtonModalize onPress={handleSubmit(handleRegister)}>
              <TitleButton>Adicionar</TitleButton>
            </ButtonModalize>
          </Footer>
        </Content>
      </Container>
    </GestureHandlerRootView>
  );
}
