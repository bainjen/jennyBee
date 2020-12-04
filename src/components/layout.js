import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, GlobalStyle } from "../themes/theme"
import Nav from "./Nav"

const components = {
  pre: props => <div className="CodeBlock" {...props}></div>,
  code: CodeBlock,
}
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div className="layout">
        <Nav />
        <MDXProvider components={components}>
          <main className="main">{children}</main>
        </MDXProvider>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
