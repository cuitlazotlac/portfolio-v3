import { createGlobalStyle } from "styled-components";


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
  }
  html{
    font-family: 'Noto Sans';
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
