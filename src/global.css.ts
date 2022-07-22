import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    font-family: sans-serif;
  }

  body {
    background-color: #e7e7e7;
  }
  #root {
    height: 100vh;
  }
`
