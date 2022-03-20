import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.light-theme{
  --background-color: #F5EFEB;
  --secondary-color: #F5F4DC;
  --third-color: #1F2124;
  --font-color: #000000;
  --brand-color: #01E3B4;
}
.dark-theme{
  --background-color: #001421;
  --secondary-color: #082235;
  --third-color: ###5B5C5D;
  --font-color: #EDF2F6;
  --brand-color: #01E3B4;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    // --dark-bg: #001321;
    // --gray-1: #BCB4B4;
    // --deep-dark: #082235;
    // --gray-2: #363636;
    --white : #FFFFF;
    --black: black;
  }
  html{
    --main-font: 'Raleway', sans-serif;
    --secondary-font: 'Nunito Sans', sans-serif;

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
