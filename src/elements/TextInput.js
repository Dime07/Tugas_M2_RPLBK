import styled, { css, ThemeProvider } from 'styled-components';
export default styled.input`
  font-family: 'roboto';
  font-size: 1.3rem;
  border: 1.5px solid;
  border-radius: 8px;
  padding: 7px 10px;
  background: white;
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.border};
    `}
  color:black;
`;
