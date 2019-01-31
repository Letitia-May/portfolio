import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
  box-sizing: inherit;
}
html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
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
    font-family: 'Montserrat', sans-serif;
    color: #555;
    h1, h2, h3, h4 {
      @import url('https://fonts.googleapis.com/css?family=Raleway');
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      letter-spacing: 0.5rem;
    }
  }
  a {
    color: #00C7B6;
    text-decoration: none;
  }
`

export default GlobalStyle
