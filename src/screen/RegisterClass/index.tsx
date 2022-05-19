import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserName,
  LogoType,
  Logo,
  Footer,
  Title,
  Status,
  Classes,
  StatusButton,
  StudentList,
  ContainerFab,
  TypeButton,
  Button,
  StatusBar,
  StatusButtonFile,
  FileDownload,
  BackPage,
  StatusButtonBack,
  TitleHeader,
} from "./styles";
import uuid from "react-native-uuid";
import { Modalize } from "react-native-modalize";
import { StudentRegisterModal } from "../../components/StudentRegisterModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Animated } from "react-native";
import { IStudentProps, StudenContent } from "../../components/StudentContent";
import { DashboardNavigationProps } from "../../@types/navigation";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export interface StudentListProps extends IStudentProps {
  id: string;
}

export function RegisterClass() {
  const [student, setStudent] = useState<StudentListProps[]>([]);
  const [isPresence, setIsPresence] = useState(false);
  const [type, setType] = useState("");
  const toogleAnimationFab = useRef(new Animated.Value(0)).current;
  const [openFab, setOpenFab] = useState(false);
  const navigation = useNavigation();
  const { user } = useAuth();
  const route = useRoute();
  const { id } = route.params as DashboardNavigationProps;

  const modalizeStudentRef = useRef<Modalize>(null);
  const handleStudentModalize = () => {
    modalizeStudentRef?.current?.open();
  };

  const collectionKey = `@fucapiclass: registerStudent_user: ${user.id}`;

  function handleOpen(id: string) {
    navigation.navigate("dashboard", { id });
    console.log("pegou", id);
  }

  function handleButtonIcon(id: string) {
    const updatedStudent = student.map((item) =>
      item.type.id === id
        ? {
            ...item,
            type: {
              ...item?.type,
              title: item?.type.title === "presence" ? "absence" : "presence",
              status: !item?.type.status,
            },
          }
        : { ...item }
    );
    setStudent([...updatedStudent]);
  }

  async function loadClasses() {
    const response = await AsyncStorage.getItem(collectionKey);
    const rooms = response ? JSON.parse(response) : [];

    const roomsDataFormatted: StudentListProps[] = rooms.map(
      (item: StudentListProps, index: number) => {
        const ra = Number(item.ra);
        return {
          id: route.key,
          ra,
          name: item.name,
          type: {
            id: String(uuid.v4()),
            status: false,
            title: "absence",
          },
        };
      }
    );

    setStudent(roomsDataFormatted);
    console.log("dados: ", roomsDataFormatted);
  }
  useEffect(() => {
    loadClasses();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(collectionKey);
    // }
    // removeAll();
  }, []);

  //ATUALIZAR A NAVEGAÇÃO APOS
  useFocusEffect(
    useCallback(() => {
      loadClasses();
    }, [])
  );
  return (
    <Container>
      <Header>
        <StatusButtonBack onPress={()=>handleOpen(id)}>
          <BackPage name="chevron-left" size={35} />
        </StatusButtonBack>
        <TitleHeader>Registro</TitleHeader>
        <Photo
          source={{
            uri: user.photo,
          }}
        />
      </Header>
      <Footer>
        <Status>
          <Title>Status</Title>
          <StatusBar>
            <StatusButton>
              <Title style={{ color: "white" }}>Finalizar aula</Title>
            </StatusButton>
            <StatusButtonFile>
              <FileDownload name="file-download" size={45} color="grey" />
            </StatusButtonFile>
          </StatusBar>
        </Status>
        <Classes>
          <StudentList
            data={student}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <StudenContent
                id={type}
                status={item.type.status}
                title={item.type.title}
                handleButtonIcon={handleButtonIcon}
                student={item}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </Classes>
        <ContainerFab>
          <GestureHandlerRootView>
            <TypeButton
              onPress={() => {
                handleStudentModalize();
              }}
            >
              <Button>
                <Logo name="user-plus" size={35} color="white" />
              </Button>
            </TypeButton>
          </GestureHandlerRootView>
        </ContainerFab>
      </Footer>

      <StudentRegisterModal modalizeStudentRef={modalizeStudentRef} />
    </Container>
  );
}
