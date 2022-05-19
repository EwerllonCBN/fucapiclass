//@ts-nocheck
import React, { useState } from "react";
import {
  Container,
  UserInf,
  Student,
  UserName,
  RAUser,
  Status,
  Photo,
  IconPresense,
  ButtonStatus,
} from "./styles";

const icons = {
  presence: "alpha-p-box",
  absence: "alpha-f-box",
};

export interface IStudentProps {
  name: string;
  ra: number;
  type: {
    id: string;
    status: boolean;
    title: string
  };
}
interface Props {
  student: IStudentProps;
  id: string
  title: string;
  status: boolean;
  handleButtonIcon: (id: string) => void;
}
export function StudenContent({
  student,
  handleButtonIcon,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <UserInf>
        <Student>
          <UserName>{student.name}</UserName>
          <RAUser>RA: {student.ra}</RAUser>
        </Student>
      </UserInf>
      <Status>
        <ButtonStatus onPress={() => handleButtonIcon(student?.type.id)}>
          <IconPresense
            id={student.type.id}
            title={student.type.title}
            status={student.type.status}
            name={icons[student.type.title]}
            size={40}
          />
        </ButtonStatus>
      </Status>
    </Container>
  );
}
