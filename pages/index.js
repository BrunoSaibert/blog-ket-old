import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

import content from "../content/home.md";

import Intro from "../components/Intro";
import Container from "../components/Container";
import { PostList, PostItem } from "../components/Post/styles";

export default class pages extends Component {
  render() {
    let {
      attributes: { title, subTitle, urlBackground }
    } = content;

    return (
      <>
        <Head>
          <title key="title">{title} - Kethlyn Saibert</title>
        </Head>

        <Intro
          title={title}
          subTitle={subTitle}
          urlBackground={urlBackground}
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
