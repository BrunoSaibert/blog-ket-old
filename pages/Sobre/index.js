import React, { Component } from "react";
import Head from "next/head";

import content from "../../content/sobre.md";

import Intro from "../../components/Intro";
import Container from "../../components/Container";

export default class Sobre extends Component {
  render() {
    const {
      html,
      attributes: { title, subTitle, urlBackground, avatar }
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
          <img src={avatar} alt="Kethlyn Saibert" className="avatar" />
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </>
    );
  }
}
