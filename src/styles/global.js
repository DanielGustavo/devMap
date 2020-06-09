import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-size: 1rem;
  }

  h1 {
    font-size: 1.2em;
  }

  span {
    font-size: .75em;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    height: 100%;
  }
`;
