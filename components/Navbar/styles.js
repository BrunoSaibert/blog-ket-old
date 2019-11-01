import styled from "styled-components";
import { darken, lighten } from "polished";

export const Header = styled.header`
  background: ${props => props.theme.colors.dark};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  /* background: transparent;
  position: absolute;*/
  top: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.light};
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.4s;
    padding: 10px 20px;

    &.brand {
      font-size: 20px;

      @media only screen and (max-width: 992px) {
        & {
          font-size: 16px;
        }
      }

      &:hover {
        color: ${props => props.theme.colors.light_gray};
      }
    }
  }

  .btn-mobile {
    display: none;
    color: ${props => props.theme.colors.light};
    background: transparent;
    border: 0;
    padding: 10px 20px;

    &.rotate-in {
      animation: rotate-in 0.3s ease-in-out;
    }

    &.rotate-out {
      animation: rotate-out 0.3s ease-in-out;
    }

    @keyframes rotate-in {
      0% {
        transform: rotate(0deg);
        opacity: 1;
      }
      50% {
        transform: rotate(90deg);
        opacity: 0.2;
      }
      100% {
        transform: rotate(180deg);
        opacity: 1;
      }
    }

    @keyframes rotate-out {
      0% {
        transform: rotate(180deg);
        opacity: 1;
      }
      50% {
        transform: rotate(90deg);
        opacity: 0.2;
      }
      100% {
        transform: rotate(0deg);
        opacity: 1;
      }
    }

    @media only screen and (max-width: 992px) {
      & {
        display: flex;
        align-items: center;
      }
    }
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        a {
          font-size: 14px;
          margin: 0 2px;
          border-radius: 5px;

          &:hover {
            background: ${props => lighten(0.1, props.theme.colors.dark)};
          }
        }
      }
    }

    @media only screen and (max-width: 992px) {
      & {
        position: absolute;
        top: 60px;
        right: -500px;
        width: 100vw;
        opacity: 0;
        transition: all 0.3s ease-in;
        z-index: -1;

        &.active {
          z-index: 1;
          right: 0;
          opacity: 1;
        }

        ul {
          flex-direction: column;
          background: ${props => lighten(0.1, props.theme.colors.dark)};

          li {
            padding: 10px 20px;
            width: 100%;
            text-align: center;
          }
        }
      }
    }
  }
`;
