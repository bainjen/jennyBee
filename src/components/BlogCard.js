import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../devices"

const ColorDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 0.15fr 0.15fr 1fr 0.25fr;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  background-color: bisque;
  height: 350px;
`
const Title = styled.h2`
  color: ${props => props.theme.green};
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2px;
  display: grid;
  align-self: center;
  @media ${device.laptop} {
    font-size: 24px;
  }
`
const StyledP = styled.p`
  color: ${props => props.theme.green};
  @media ${device.laptop} {
    /* text-align: justify; */
  }
`
const LineDiv = styled.div`
  border-bottom: solid 1px;
  margin-bottom: 1em;
`
const StyledLink = styled(Link)`
  /* color: ${props => props.theme.lilac}; */
  color: ${props => props.theme.green};

  &:visited {
    text-decoration: none;
    /* color: bisque; */
    /* color: white; */
    color: ${props => props.theme.green};
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.salmon};
  }
`
const BlogCard = ({ title, date, description, className, path }) => {
  const [year, month, day] = date.split("-")

  return (
    <ColorDiv className={className}>
      <Title>{title}</Title>
      <StyledP>{`${month}/${day}/${year}`}</StyledP>
      <LineDiv />
      <StyledP>{description}</StyledP>
      <StyledLink to={path}>Read more</StyledLink>
    </ColorDiv>
  )
}

export default BlogCard
