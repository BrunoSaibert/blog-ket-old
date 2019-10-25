import styled from "styled-components";
import { darken, lighten } from "polished";

export const Header = styled.header`
  background: ${props => props.theme.colors.dark};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  /* background: transparent;
  position: absolute;
  left: 0;
  right: 0; */
`;

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.ligth};
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.4s;

    &.brand {
      font-size: 20px;

      &:hover {
        color: ${props => props.theme.colors.ligth_gray};
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    li {
      a {
        font-size: 14px;
        padding: 10px 20px;
        margin: 0 2px;
        border-radius: 5px;

        &:hover {
          background: ${props => lighten(0.1, props.theme.colors.dark)};
        }
      }
    }
  }
`;
