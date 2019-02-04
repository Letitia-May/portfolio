import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-grey: #555555;
    --light-grey: #bdbdbd;
    --white: #fcfcfc;
    --pink: #ff78ba;
    --teal: #00c7b6;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    font: 1.25em sans-serif;
    /* -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); */
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
		padding: 0;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Montserrat', sans-serif;
    color: var(--dark-grey);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    letter-spacing: 0.35rem;
    color: var(--white);
    font-family: 'Raleway', sans-serif;
  }
  a {
    color: var(--teal);
    text-decoration: none;
  }
`

export default GlobalStyle
