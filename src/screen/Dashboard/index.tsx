import React, { useCallback, useEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  Classes,
  Title,
  Footer,
  TypeButton,
  Button,
  ButtonUser,
  ButtonTeacher,
  ContainerFab,
  ClassesList,
} from "./styles";
import { Animated } from "react-native";
import { TeacherRegisterModal } from "../../components/TeacherRegisterModal";
import { FontAwesome5 } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";
import {
  HighlightRoomProps,
  HighlightRoom,
} from "../../components/HighlightRoom";
import { useAuth } from "../../hooks/auth";
export interface ClassesListProps extends HighlightRoomProps {
  id: string;
}

export function Dashboard() {
  const navigation = useNavigation();
  const [classes, setClasses] = useState<ClassesListProps[]>([]);
  const [openFab, setOpenFab] = useState(false);
  const toogleAnimationFab = useRef(new Animated.Value(0)).current;
  const { signOut, user } = useAuth();

  const startAnimation = () => {
    const toValue = openFab ? 0 : 1;
    Animated.timing(toogleAnimationFab, {
      toValue: toValue,
      duration: 350,
      useNativeDriver: true,
    }).start();
    setOpenFab(!openFab);
  };
  const modalizeTeacherRef = useRef<Modalize>(null);
  const handleTeacherModalize = () => {
    modalizeTeacherRef?.current?.open();
  };

  function handleOpen(id: string) {
    navigation.navigate("registerclass", { id });
  }
  const collectionKey = `@fucapiclass: registerClass_user: ${user.id}`;
  async function loadClasses() {
    const response = await AsyncStorage.getItem(collectionKey);

    const rooms = response ? JSON.parse(response) : [];
    const roomsDataFormatted: ClassesListProps[] = rooms.map(
      (item: ClassesListProps) => {
        const date = Intl.DateTimeFormat("pt-BR", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          title: item.title,
          date,
        };
      }
    );

    // const filter = roomsDataFormatted.filter(item => item.name === '')
    setClasses(roomsDataFormatted);
    console.log("dados: ", roomsDataFormatted);
  }
  useEffect(() => {
    loadClasses();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(collectionKey);
    // }
    // removeAll();
  }, []);

  //ATUALIZAR A NAVEGAÇÃO APOS CRIAR TURMA
  useFocusEffect(
    useCallback(() => {
      loadClasses();
    }, [])
  );
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: user.photo }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>{user.name}</UserName>
            </User>
          </UserInfo>

          <GestureHandlerRootView>
            <LogoutButton onPress={signOut}>
              <Icon name="log-out" color="black" />
            </LogoutButton>
          </GestureHandlerRootView>
        </UserWrapper>
      </Header>

      <Footer>
        <Classes>
          <Title>Listagem de salas</Title>
          <ClassesList
            data={classes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <HighlightRoom onPress={() => handleOpen(item.id)} data={item} />
            )}
          />
        </Classes>
        <ContainerFab>
          <GestureHandlerRootView>
            <TypeButton
              onPress={() => {
                startAnimation();
                handleTeacherModalize();
              }}
            >
              <Button>
                <FontAwesome5 name="plus" size={25} color="white" />
              </Button>
            </TypeButton>
          </GestureHandlerRootView>
        </ContainerFab>
      </Footer>

      <TeacherRegisterModal
        modalizeTeacherRef={modalizeTeacherRef}
        onClose={""}
      />
    </Container>
  );
}
