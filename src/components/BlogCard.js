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
    text-align: justify;
  }
`
const LineDiv = styled.div`
  border-bottom: solid 1px;
  margin-bottom: 1em;
`
const BlogCard = ({ title, date, description, className, path }) => {
  return (
    <ColorDiv className={className}>
      <Title>{title}</Title>
      <StyledP>{date}</StyledP>
      <LineDiv />
      <StyledP>{description}</StyledP>
      <Link to={path}>Read more</Link>
    </ColorDiv>
  )
}

export default BlogCard