import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.colors.dark};
  background-image: url(${props => props.urlBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.colors.light};
  margin: 0 auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 80px;
    line-height: 80px;
    font-weight: bold;
    text-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
    margin: 0 0 30px;
  }

  span {
    font-size: 25px;
    text-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
  }
`;
