import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HighlightRoom } from "../../components/HighlightRoom";
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
  ClassButton,
  Footer
 } from "./styles";
 import { Ionicons } from '@expo/vector-icons';
import {FabButton} from "../../components/FabButton";
import { StyleSheet } from "react-native";

export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFckY948-6Raw/profile-displayphoto-shrink_800_800/0/1638541634529?e=1652313600&v=beta&t=AeVUSCJz8AF9ll7d1Ju3qO_k_7rErm2lkFOcRe3uW-0'}}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Ewerllon</UserName>
            </User>
          </UserInfo>
          
          <GestureHandlerRootView>
            <LogoutButton>
              <Icon name='power' color='black'/>
            </LogoutButton>
          </GestureHandlerRootView>
          
        </UserWrapper> 
      </Header>

      <Footer>
        <Classes>
          <Title>Listagem de Turmas</Title>
          
          <HighlightRoom/>
          <HighlightRoom/>
          <HighlightRoom/>     
          <HighlightRoom/>
          <HighlightRoom/>
          <HighlightRoom/>  
          <HighlightRoom/>
          <HighlightRoom/>
          <HighlightRoom/>       
          
          
        </Classes> 
        <FabButton/>
      </Footer>
        
        
    </Container>
  )
}