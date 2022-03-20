import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
  }
  html{
    font-family: 'Raleway';
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
