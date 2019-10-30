import React, { Component } from "react";
import Head from "next/head";

import content from "../../content/contato.md";

import Intro from "../../components/Intro";
import Container from "../../components/Container";

export default class Contato extends Component {
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

          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />

            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </Container>
      </>
    );
  }
}
