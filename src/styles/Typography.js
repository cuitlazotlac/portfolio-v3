import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
  }
  html{
    font-family: 'Inter Tight';
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
