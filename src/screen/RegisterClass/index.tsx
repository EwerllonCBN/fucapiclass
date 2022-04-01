import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
  Classes,
  Title
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { StudenContent } from "../../components/StudentContent";

export function RegisterClass(){
  return(
    <Container>      
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFckY948-6Raw/profile-displayphoto-shrink_800_800/0/1638541634529?e=1652313600&v=beta&t=AeVUSCJz8AF9ll7d1Ju3qO_k_7rErm2lkFOcRe3uW-0'}}/>
            <User>
              <UserName>Ewerllon Cristian</UserName>
            </User>
          </UserInfo>        
          <LogoType>
            <Logo source={require('../../assets/LOGOTIPO.png')} />
          </LogoType>
        </UserWrapper> 
      </Header>
      <Footer>
        <Classes>
          <Title>Status da Aula</Title>
                   
        </Classes> 
        <StudenContent/>
        <StudenContent/>
        <StudenContent/>
        <StudenContent/>
        <StudenContent/>
        <StudenContent/>
        <StudenContent/>
      </Footer>
    
    </Container>
  )
}