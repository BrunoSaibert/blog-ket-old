import React, { Component } from "react";
import Link from "next/link";

import { Header } from "./styles";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a target="blank">f</a>
              </Link>
            </li>
            <li>
              <Link href="/Sobre">
                <a target="blank">f</a>
              </Link>
            </li>
            <li>
              <Link href="/Contato">
                <a target="blank">f</a>
              </Link>
            </li>
          </ul>
          <p>Copyright © 2019</p>
        </nav>
      </Header>
    );
  }
}
