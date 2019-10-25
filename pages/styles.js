import styled from "styled-components";
import { lighten } from "polished";

export const PostList = styled.ul``;

export const PostItem = styled.li`
  list-style: none;
  margin: 30px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid ${props => lighten(0.7, props.theme.colors.dark)};

  h2 {
    font-size: 35px;
    line-height: 40px;
    margin: 0;
  }

  h3 {
    font-size: 20px;
    line-height: 25px;
    font-weight: normal;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: ${props => props.theme.colors.gray};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.dark};
    transition: all 0.4s;
    font-weight: bold;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
