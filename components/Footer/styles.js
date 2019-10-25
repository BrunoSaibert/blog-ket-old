import styled from "styled-components";
import { lighten } from "polished";

export const Header = styled.header`
  border-top: 1px solid ${props => lighten(0.7, props.theme.colors.dark)};

  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto auto 0;

  p {
    text-align: center;
    font-size: 10px;
  }

  a {
    color: ${props => props.theme.colors.dark};
    text-decoration: none;
    font-weight: bold;

    &.brand {
      letter-spacing: 1px;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    li {
      a {
        padding: 10px 20px;
        margin: 0 2px;
        border-radius: 5px;
        transition: all 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;
