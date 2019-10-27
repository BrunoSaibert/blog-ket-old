import React, { Component } from "react";
import Head from "next/head";

import content from "../../content/sobre.md";

import Intro from "../../components/Intro";
import Container from "../../components/Container";

export default class Sobre extends Component {
  render() {
    const {
      html,
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
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </>
    );
  }
}
