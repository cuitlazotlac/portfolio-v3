import { createGlobalStyle } from "styled-components";


const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Bricolage Grotesque';
    font-style: normal;
  }
  html{
    font-family: 'Bricolage Grotesque';
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
