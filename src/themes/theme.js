import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background: ${props => props.theme.main}; 
    color: ${props => props.theme.mainFont}; 
    overflow-x: hidden;
    font-family: ${props => props.theme.mainFont}
  }
`

export const lightTheme = {
  main: "#fff",
  mainFont: "#303030",
  mainPadding: "1em",
  cursiveFont: "'Cookie', cursive",
  mainFont: "'Raleway', sans-serif",
}
