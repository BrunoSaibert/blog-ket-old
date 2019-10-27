import React, { Component } from "react";
import Link from "next/link";

import Intro from "../components/Intro";
import Container from "../components/Container";

import { PostList, PostItem } from "../components/Post/styles";

export default class pages extends Component {
  render() {
    return (
      <>
        <Intro
          urlBackground="https://picsum.photos/id/403/2000/1000"
          title="Blog da Ket"
          subTitle="Aqui estão meus pensamentos"
        />
        <Container>
          <PostList>
            <PostItem>
              <Link href="/Post">
                <a>
                  <h2>Aqui temos o nome do post topzeira</h2>
                  <h3>Aqui temos uma breve introdução do post topzeira</h3>
                </a>
              </Link>
              <p>
                Escrito por{" "}
                <Link href="/Sobre">
                  <a>Kethlyn Saibert</a>
                </Link>{" "}
                em 24 de Setembro de 2019
              </p>
            </PostItem>

            <PostItem>
              <Link href="/Post">
                <a>
                  <h2>Aqui temos o nome do post topzeira</h2>
                  <h3>Aqui temos uma breve introdução do post topzeira</h3>
                </a>
              </Link>
              <p>
                Escrito por{" "}
                <Link href="/Sobre">
                  <a>Kethlyn Saibert</a>
                </Link>{" "}
                em 24 de Setembro de 2019
              </p>
            </PostItem>

            <PostItem>
              <Link href="/Post">
                <a>
                  <h2>Aqui temos o nome do post topzeira</h2>
                  <h3>Aqui temos uma breve introdução do post topzeira</h3>
                </a>
              </Link>
              <p>
                Escrito por{" "}
                <Link href="/Sobre">
                  <a>Kethlyn Saibert</a>
                </Link>{" "}
                em 24 de Setembro de 2019
              </p>
            </PostItem>
          </PostList>
        </Container>
      </>
    );
  }
}
