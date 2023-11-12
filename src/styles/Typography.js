import { createGlobalStyle } from "styled-components";


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Onest';
    font-style: normal;
  }
  html{
    font-family: 'Onest';
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
