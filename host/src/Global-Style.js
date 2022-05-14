import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-size: 16px;
  }

  body {
    background: ${props => (props.theme.colors.background)};
    color: ${props => props.theme.colors.text};
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  h1,h2,h4 {
    margin: 0;
  }

  p {
    margin-top: 0;
  }
`;

export default GlobalStyle;
