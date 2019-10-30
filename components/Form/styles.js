import styled from "styled-components";
import { lighten } from "polished";

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: 50px auto;
  padding: 0;
  width: 100%;
  max-width: 450px;
`;

export const Label = styled.label`
  width: 100%;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.theme.colors.dark};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.light};
  border: 2px solid ${props => lighten(0.5, props.theme.colors.dark)};
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors.dark};
  border: 2px solid ${props => lighten(0.5, props.theme.colors.dark)};
  outline: none;
`;
