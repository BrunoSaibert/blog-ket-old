import React, { Component } from "react";

import { Container } from "./styles";

export default class Intro extends Component {
  render() {
    const { urlBackground, title, subTitle } = this.props;

    return (
      <Container urlBackground={urlBackground}>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </Container>
    );
  }
}
