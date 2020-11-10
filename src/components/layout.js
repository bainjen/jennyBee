import React from "react"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"

import Nav from "./Nav"

const components = {
  pre: props => <div className="CodeBlock" {...props}></div>,
  code: CodeBlock,
}
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <MDXProvider components={components}>
        <main className="main">{children}</main>
      </MDXProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
