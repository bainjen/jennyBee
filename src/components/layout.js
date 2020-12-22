import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import { lightTheme, GlobalStyle } from "../themes/theme"
import { device } from "./devices"
import Nav from "./Nav"

const components = {
  pre: props => (
    <div
      className="CodeBlock"
      style={{ position: "relative" }}
      {...props}
    ></div>
  ),
  code: CodeBlock,
}

const StyledMain = styled.main`
  padding: ${props => props.theme.mainPadding};
  display: flex;
  flex-direction: column;
  /* padding-top: 50px; */
  padding-top: 0;

  @media ${device.laptop} {
    padding-left: ${props => props.theme.extraLeftPad};
    padding-right: ${props => props.theme.extraRightPad};
    padding-top: 50px;
  }

  @media ${device.desktop} {
    padding-top: 150px;
    padding-top: 50px;
  }
`
const Layout = ({ isMainPage, children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Helmet>
        <title>Jennifer Bain</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="layout">
        <Nav isMainPage={isMainPage} />
        <MDXProvider components={components}>
          <StyledMain className="main">{children}</StyledMain>
        </MDXProvider>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
