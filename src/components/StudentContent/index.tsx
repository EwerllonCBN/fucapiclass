import React from "react";
import {
  Container,
  UserInf,
  User,
  Student,
  UserName,
  RAUser,
  Status,
  Photo,
  StatusCheck,
  IconPresense,
  IconAbsent,
} from './styles';
import { AntDesign } from '@expo/vector-icons';
export function StudenContent(){
  return(
    <Container>
      <UserInf>
        <Photo source={{uri: 'https://scontent.fmao1-1.fna.fbcdn.net/v/t39.30808-6/274816730_685321072914787_4805900487087902325_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=39qEvYvCfAgAX-8zRnG&_nc_ht=scontent.fmao1-1.fna&oh=00_AT-km6enLHLHSWj30d9uP5-wgbb4F3hJchS6FeMnb4Nu4w&oe=623DC305'}}/>
        <Student>
          <UserName>Kamilly Prado</UserName>
          <RAUser>RA: 2991923</RAUser>
        </Student>
      </UserInf>

      <Status>
        <IconPresense name="checkcircle" size={25} color="green"/>
        <IconAbsent name="closecircle" size={25} color="red"/>
      </Status>
    </Container>
  )
}