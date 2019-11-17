// styles/global.js
import css from "styled-jsx/css";

export default css.global`
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Open+Sans&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.dark_gray};
    // font-family: "Open Sans", sans-serif;
    font-family: "IBM Plex Sans", "Open Sans", sans-serif;
  }

  .avatar {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 120px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin-top: -60px;
  }
`;
