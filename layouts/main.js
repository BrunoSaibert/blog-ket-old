import React, { Component } from "react";
import { initGA, logPageView } from "../utils/analytics";

import globalStyles from "../public/styles/global.js";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <>
        <Navbar />

        {this.props.children}

        <Footer />

        <style jsx global>
          {globalStyles}
        </style>
      </>
    );
  }
}
