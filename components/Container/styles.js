import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;

  article {
    margin: 50px 20px;
    font-family: "Open Sans", sans-serif;
    color: ${props => lighten(0.1, props.theme.colors.dark)};

    h1 {
      font-size: 50px;
      line-height: 50px;
      margin: 20px 0;
    }
    h2 {
      font-size: 40px;
      line-height: 40px;
      margin: 20px 0;
    }
    h3 {
      font-size: 30px;
      line-height: 30px;
      margin: 20px 0;
    }
    h4 {
      font-size: 20px;
      line-height: 20px;
      margin: 20px 0;
    }
    h5 {
      font-size: 16px;
      line-height: 16px;
      margin: 20px 0;
    }
    h6 {
      font-size: 14px;
      line-height: 14px;
      margin: 20px 0;
    }

    p {
      font-size: 18px;
      line-height: 25px;
      margin: 20px 0;
    }

    blockquote {
      background: ${props => lighten(0.2, props.theme.colors.dark)};
      background: ${props => lighten(0.8, props.theme.colors.dark)};
      border-radius: 5px;
      padding: 5px 15px;
      /* margin: 0 50px; */
      font-style: italic;

      p {
        font-size: 16px;
        line-height: 20px;
        margin: 5px 0;
      }
    }

    a {
      color: ${props => props.theme.colors.primary};

      & {
        :hover {
          color: ${props => lighten(0.1, props.theme.colors.primary)};
        }
      }
    }

    img {
      width: 100%;
    }

    ol,
    ul {
      margin: 20px;
    }

    code {
      color: ${props => props.theme.colors.secondary};
      background: ${props => lighten(0.2, props.theme.colors.dark)};
      border-radius: 2px;
      padding: 2px;
    }
  }
`;
