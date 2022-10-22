import styled, { css } from "styled-components";

export default styled.button`
  font-family: "roboto";
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background: green;
  margin: 20px 10px;
  transition: all 0.5s;
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}
  color:white;
  &:hover {
    padding-right: 25px;
  }
`;
