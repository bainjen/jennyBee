import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { device } from "../devices"

const StyledNav = styled.nav`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.mainPadding};
  padding-left: 0;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  position: sticky;
  z-index: 1000;
  width: 100vw;

  @media ${device.tablet} {
    font-size: 16px;
    padding-left: 1em;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.theme.extraLeftPad};
    padding-right: ${props => props.theme.extraRightPad};
    font-size: 20px;
  }
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
  font-size: 84px;
  color: ${props => props.theme.salmon};

  margin-bottom: 20px;
  @media ${device.laptop} {
    margin-bottom: 0;
  }
  @media ${device.laptop} {
    margin-bottom: 0;
  }
  @media ${device.desktop} {
    font-size: 116px;
  }
`
const StyledLink = styled(Link)`
  color: ${props => props.theme.navColor};

  &:visited {
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
    color: ${props => props.theme.lightSalmon};
  }
  &:hover {
    /* text-decoration: none; */
    text-decoration: underline;
    color: ${props => props.theme.sunflower};
  }
  ${props =>
    props.isMainPage &&
    css`
      color: white;
      &:hover {
        text-decoration: underline;
        color: white;
      }
    `}
`

const Nav = props => {
  const { isMainPage } = props

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
        <StyledLink isMainPage={isMainPage} to={label.path}>
          {label.name}
        </StyledLink>
      </li>
    )
  })

  return (
    <StyledNav className="nav">
      <StyledH1>JennyBain</StyledH1>
      <StyledUl className="nav-list">{links}</StyledUl>
    </StyledNav>
  )
}

export default Nav
