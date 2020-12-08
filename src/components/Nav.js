import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// import "./nav.css"

const StyledNav = styled.nav`
  text-decoration: none;
  display: flex;
  padding: ${props => props.theme.mainPadding};
  justify-content: space-between;
`
const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  & li {
    margin-left: 1em;
  }
`

const StyledH1 = styled.h1`
  font-family: ${props => props.theme.cursiveFont};
  font-size: 4em;
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.mainFont};

  &:visited {
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`

const Nav = () => {
  const navLabels = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]

  const links = navLabels.map(label => {
    return (
      <li key={label.name} className="nav-list-item">
        <StyledLink to={label.path}>{label.name}</StyledLink>
      </li>
    )
  })

  return (
    <StyledNav className="nav">
      <StyledH1>JennyBee</StyledH1>
      <StyledUl className="nav-list">{links}</StyledUl>
    </StyledNav>
  )
}

export default Nav
