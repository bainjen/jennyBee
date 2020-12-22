import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../devices"

const ColorDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 0.15fr 0.15fr 1fr 0.25fr;
  /* padding-left: 20px;
  padding-right: 20px; */
  padding: 40px;
  border-radius: 15px;
  /* background-color: bisque; */
  background-color: ${props => props.theme.sunflower};
  height: 350px;
`
const Title = styled.h2`
  /* color: ${props => props.theme.green}; */
  color: #fffff7;
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 2px;
  display: grid;
  align-self: center;
  margin: revert;
  padding-bottom: 0.5em;
  @media ${device.laptop} {
    font-size: 32px;
  }
`
const StyledP = styled.p`
  /* color: ${props => props.theme.green}; */
  color: #fffff7;
  padding-bottom: 0.5em;
  font-size: 24px;
  letter-spacing: 2px;
  font-weight: 200;
  @media ${device.laptop} {
    /* text-align: justify; */
  }
`
const LineDiv = styled.div`
  /* color: white; */
  color: ${props => props.theme.green};
  border-bottom: solid 1px;
  margin-bottom: 1em;
`
const StyledLink = styled(Link)`
  /* color: ${props => props.theme.lilac}; */
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.salmon};

  &:visited {
    text-decoration: none;
    /* color: bisque; */
    /* color: white; */
    color: ${props => props.theme.salmon};
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.lightSalmon};
  }
`
const BlogCard = ({ title, date, description, className, path }) => {
  const [year, month, day] = date.split("-")

  return (
    <ColorDiv className={className}>
      <Title>{title}</Title>
      <StyledP>{`${month}/${day}/${year}`}</StyledP>
      {/* <LineDiv /> */}
      {/* <StyledP>{description}</StyledP> */}
      <StyledLink to={path}>read more</StyledLink>
      <span></span>
    </ColorDiv>
  )
}

export default BlogCard
