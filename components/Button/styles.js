import styled from "styled-components";
import { lighten } from "polished";

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  transition: all 0.4s;
  outline: none;

  &:hover {
    background: ${props => lighten(0.07, props.theme.colors.primary)};
    border: 1px solid ${props => lighten(0.07, props.theme.colors.primary)};
  }
`;
