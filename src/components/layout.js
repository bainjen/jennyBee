import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import { lightTheme, GlobalStyle } from "../themes/theme"
import Nav from "./Nav"

const components = {
  pre: props => <div className="CodeBlock" {...props}></div>,
  code: CodeBlock,
}

const StyledMain = styled.main`
  padding: ${props => props.theme.mainPadding};
`
const Layout = ({ children }) => {
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
      </Helmet>
      <div className="layout">
        <Nav />
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
