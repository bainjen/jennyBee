import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// import "./nav.css"

const StyledNav = styled.nav`
  text-decoration: none;
`
const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
`
const StyledLink = styled(Link)`
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
      path: "/home",
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
      <StyledUl className="nav-list">{links}</StyledUl>
    </StyledNav>
  )
}

export default Nav
