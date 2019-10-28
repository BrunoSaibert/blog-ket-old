import styled from "styled-components";
import { lighten } from "polished";

export const FooterContainer = styled.footer`
  border-top: 1px solid ${props => lighten(0.7, props.theme.colors.dark)};

  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 10px;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    li {
      a {
        color: ${props => props.theme.colors.dark};
        display: flex;
        align-items: center;
        padding: 15px;
        margin: 0 5px;
        border-radius: 50%;
        transition: all 0.3s;
        background: ${props => lighten(0.75, props.theme.colors.dark)};

        &:hover {
          background: ${props => lighten(0.65, props.theme.colors.dark)};
        }
      }
    }
  }
`;
