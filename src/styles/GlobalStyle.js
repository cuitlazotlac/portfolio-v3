import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.light-theme{
  --background-color: #F3F2F3;
  --secondary-color: #F2EFEE;
  --third-color: #1F2124;
  --fourth-color: #000000;
  --shadow-color: #3C3C3C;
  --font-color: #000000;
  --brand-color: #000000;
  --btn-color: #EDF2F6;
  --btn-border-color: #000000;
  --icon-color: #000000;
  --white : white;
  --footer-text-color: white;
}
.dark-theme{
  --background-color: #001421;
  --secondary-color: #082235;
  --third-color: #5B5C5D;
  --fourth-color: #082235;
  --shadow-color: #4D638D;
  --font-color: #EDF2F6;
  --brand-color: #01E3B4;
  --btn-color: #001421;
  --btn-border-color: #CCD0D3;
  --icon-color: #000000;
  --white : white;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --white : white;
    --black: black;
  }
  html{
    --main-font: 'Inter Tight', sans-serif;
    --secondary-font: 'Inter', sans-serif;
    --stacks-font: 'Roboto Mono';

    font-size: 10px;
    font-family:  var(--main-font);
    color: var(--font-color);
    background-color: var(--background-color);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--background-color);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--background-color);
      }
    }
  }
`;
export default GlobalStyles;
