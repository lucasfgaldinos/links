import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Lexend", serif;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(190deg,#091057,#0b192c,#050c9c);
    background-size: 180% 180%;
    animation: gradientAnimation 12s ease infinite;
    
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`
