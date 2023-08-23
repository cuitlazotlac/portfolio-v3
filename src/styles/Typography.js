import { createGlobalStyle } from "styled-components";


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'League Spartan';
    font-style: normal;
  }
  html{
    font-family: 'League Spartan';
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
