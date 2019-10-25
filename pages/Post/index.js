import React from "react";

import Intro from "../../components/Intro";
import Container from "../../components/Container";

export default function Sobre() {
  return (
    <>
      <Intro
        urlBackground="https://picsum.photos/id/409/2000/1000"
        title="Nome do post"
        subTitle="descrição"
      />
      <Container>
        <p>Aqui estamos na Post</p>
      </Container>
    </>
  );
}
