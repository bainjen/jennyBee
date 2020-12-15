import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"

import { device } from "./devices"

const StyledPre = styled.pre`
  /* background-color: bisque; */
  /* background-color: #ffe4c447; */
  /* very light mint */
  background-color: ${props => props.theme.lightGreen};
  padding: 10px;
  border-radius: 5px;
  padding-top: 40px;
  font-size: 1em;
  overflow: scroll;
  @media ${device.tablet} {
    font-size: 1.25em;
  }
`

const LanguageTag = styled.div`
  position: absolute;
  right: 10%;
  margin-top: -40px;
  line-height: 25px;
  height: 25px;
  /* background-color: ${props => props.theme.green}; */
  background-color: ${props => props.theme.midGreen};
  color: whitesmoke;
  font-family: "Nunito", sans-serif;
  font-weight: 500;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 2px 10px;
  text-transform: lowercase;
  @media ${device.laptop} {
    right: 10%;
  }
`

const theme = {
  plain: {
    color: "#b16286",
    // color: "#cbc1db",
    backgroundColor: "#BC853B",
    // backgroundColor: `${props => props.theme.shutters}`,
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#7c6f64",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#d79921",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#3c3836",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#af3a03",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#b16286",
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#427b58",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#b57614",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#076678",
      },
    },
  ],
}

export default ({ children, className }) => {
  // Pull the className

  const hasOriginalClass = className ? true : false
  const language =
    (hasOriginalClass && className.replace(/language-/, "")) || ""

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className}>
          {hasOriginalClass && <LanguageTag>{language}</LanguageTag>}
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </StyledPre>
      )}
    </Highlight>
  )
}
