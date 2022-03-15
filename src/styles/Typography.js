import { createGlobalStyle } from "styled-components";
import Alliance from "../assets/fonts/Alliance-No.1-Light.otf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Alliance No.1";
    src: url(${"Alliance"});
    font-style: normal;
  }
  html{
    font-family: "Alliance No.1";
    color: var(--font-color);
  }
  *{
    color: var(--font-color);
  }
`;

export default Typography;
