import React from "react";
import Link from "next/link";

import { Header, Container } from "./styles";

export default function Navbar() {
  return (
    <Header>
      <Container>
        <Link href="/">
          <a className="brand">Kethlyn Saibert</a>
        </Link>

        <nav>
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
