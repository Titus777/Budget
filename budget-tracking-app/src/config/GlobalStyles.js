import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  background-color: white;
  font-family: Arial;
  display: flex;
  height: fit-content;
  margin: 0;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 42px; 
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 32px;
}

h4 {
  font-size: 19px;
}

`;

export default GlobalStyles;
