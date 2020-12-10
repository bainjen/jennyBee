import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background: ${props => props.theme.main}; 
    color: ${props => props.theme.green}; 
    overflow-x: hidden;
    font-family: ${props => props.theme.mainFont}; 
    font-size: 16px;
  }

  body {
    border: 8px solid ${props => props.theme.green};
    height: 100vh;
  }
`

export const lightTheme = {
  main: "#fff",
  charcoal: "#303030",
  mainPadding: "3vh 6vw",
  extraLeftPad: "5vw",
  extraRightPad: "5vw",
  cursiveFont: "'Cookie', cursive",
  mainFont: "'Raleway', sans-serif",
  peach: "#E59852",
  salmon: "#F5644E",
  mustard: "#BC853B",
  tan: "#B39674",
  lilac: "#C3A3AE",
  purple: "#766EC1",
  green: "#223C38",
}
