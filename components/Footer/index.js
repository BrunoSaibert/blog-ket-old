import React, { Component } from "react";
import Link from "next/link";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { FooterContainer } from "./styles";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FooterContainer>
        <nav>
          <ul>
            <li>
              <a href="https://www.instagram.com/kettavs/" target="blank">
                <FaInstagram
                  size={25}
                  color={props => props.theme.colors.dark}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kethlyn-tavares-saibert/"
                target="blank"
              >
                <FaLinkedinIn
                  size={25}
                  color={props => props.theme.colors.dark}
                />
              </a>
            </li>
          </ul>
          <p>Copyright © 2019</p>
        </nav>
      </FooterContainer>
    );
  }
}
