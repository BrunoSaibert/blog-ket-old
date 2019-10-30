import React, { Component } from "react";
import Head from "next/head";

import content from "../../content/contato.md";

import Intro from "../../components/Intro";
import Container from "../../components/Container";
import { Form, Label, Input, TextArea } from "../../components/Form/styles";
import { Button } from "../../components/Button/styles";

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
          <article dangerouslySetInnerHTML={{ __html: html }} />

          <Form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Input type="hidden" name="form-name" value="contact" />

            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" name="name" />

            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" name="email" />

            <Label htmlFor="message">Mensagem</Label>
            <TextArea id="message" name="message"></TextArea>

            <Button type="submit">Enviar</Button>
          </Form>
        </Container>
      </>
    );
  }
}
