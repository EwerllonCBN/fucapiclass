import React, { useRef, useState } from "react";
import {
  Container,
  TypeButton,
  Button,
  ButtonUser,
  ButtonTeacher
} from './styles';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Animated } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
// import { StudentRegisterModal } from "../StudentRegisterModal";
import { TeacherRegisterModal } from "../TeacherRegisterModal";

interface ModalizeProps{
  isOpen: ()=> void ;
}


export function FabButton(){
  const [isOpen, setIsOpen] = useState(false);
  // const [openModalize, setOpenModalize] = useState<ModalizeProps>({open.isOpen});
  const toogleAnimation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.timing(toogleAnimation, {
      toValue: toValue,
      duration: 350,
      useNativeDriver: true
    }).start();
    setIsOpen(!isOpen);
  }
  // const onOpen = () => { 
  //   console.log('pegou: ', onOpen)
  //   setOpenModalize(openModalize);
  // } ;

    return(
      <Container>
   
        
        <GestureHandlerRootView>
          <TypeButton onPress={()=>{}} >
            <ButtonUser style={{
              transform: [
                {
                  translateY: toogleAnimation.interpolate({
                    inputRange: [0,1],
                    outputRange: [100, -20]
                  })
                }
              ]
            }}>
              {/* <TeacherRegisterModal open={open}/> */}
              <FontAwesome5 name='chalkboard-teacher' size={25} color="white"/>
            </ButtonUser>
          </TypeButton>
        </GestureHandlerRootView>
        <GestureHandlerRootView>
          <TypeButton onPress={()=> {}}>
            <ButtonTeacher 
            style={{
              transform: [
                {
                  translateY: toogleAnimation.interpolate({
                    inputRange: [0,1],
                    outputRange: [50, -15]
                  })
                }
              ]
            }}>
              <FontAwesome5 name='user-plus' size={20} color="white"/>
            </ButtonTeacher>
          </TypeButton>
        </GestureHandlerRootView>  
        <GestureHandlerRootView>
          <TypeButton onPress={() => {
            startAnimation()
          }}>
            <Button style={{
              transform: [
                {
                  rotate: toogleAnimation.interpolate({
                    inputRange: [0,1],
                    outputRange: ["0deg", "90deg"]
                  })
                }
              ]
            }}>
              <FontAwesome5 name='plus' size={25} color="white"/>
            </Button>
          </TypeButton>
        </GestureHandlerRootView>
      </Container>
    )
}
