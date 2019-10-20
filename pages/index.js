import React, { Component } from "react";
import content from "../content/home.md";

export default class Home extends Component {
  render() {
    let {
      html,
      attributes: { title }
    } = content;
    return (
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }
}
