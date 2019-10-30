// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Open+Sans&display=swap");

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.dark_gray};
    // font-family: "Open Sans", sans-serif;
    font-family: "IBM Plex Sans", sans-serif;
  }
`;
