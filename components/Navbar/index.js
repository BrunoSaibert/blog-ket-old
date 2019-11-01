import React, { Component } from "react";
import Link from "next/link";

import { FaBars, FaTimes } from "react-icons/fa";

import { Header, Container } from "./styles";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: false
    };
  }

  handleMobileMenu = () => {
    this.setState(prevState => ({
      mobileMenu: !prevState.mobileMenu
    }));
  };

  render() {
    const { mobileMenu } = this.state;

    return (
      <Header>
        <Container>
          <Link href="/">
            <a className="brand">Kethlyn Saibert</a>
          </Link>

          <button
            className={`btn-mobile ${mobileMenu ? "rotate-in" : "rotate-out"}`}
            onClick={this.handleMobileMenu}
          >
            {mobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <nav
            className={`${mobileMenu && "active"}`}
            onClick={this.handleMobileMenu}
          >
            <ul>
              <li>
                <Link href="/">
                  <a>Início</a>
                </Link>
              </li>
              <li>
                <Link href="/Sobre">
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/Contato">
                  <a>Contato</a>
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </Header>
    );
  }
}
