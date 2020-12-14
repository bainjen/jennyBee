import React from "react"
import styled from "styled-components"
import { device } from "../devices"

const ColorDiv = styled.div`
  display: grid;
  grid-template-rows: 0.75fr 0.25fr 1fr;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  margin-bottom: 20px;

  &.about {
    margin-bottom: 3vh;
    @media ${device.laptop} {
      margin-bottom: 75px;
    }
  }
  &.one {
    background-color: ${props => props.theme.peach};

    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
  &.two {
    background-color: bisque;
    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
  &.three {
    background-color: ${props => props.theme.shutters};
    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
`
const StyledH2 = styled.h2`
  color: ${props => props.theme.green};
  text-transform: uppercase;
  margin-top: 0.25em;
  margin-bottom: 0.12em;
  font-size: 16px;
  letter-spacing: 2px;
  padding-top: 1em;
  @media ${device.laptop} {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 24px;
  }
`

const StyledP = styled.p`
  color: ${props => props.theme.green};
  margin-bottom: 1em;
  & span {
    margin-left: 0.25em;
  }
  @media ${device.laptop} {
    text-align: justify;
    &.aboutP {
      font-size: 24px;
    }
  }
`

const LineDiv = styled.div`
  border-bottom: solid 1px;
  margin-bottom: 1em;
`

const AboutCard = ({ title, description, className }) => {
  return (
    <ColorDiv className={className}>
      <StyledH2>{title}</StyledH2>
      <LineDiv />
      <StyledP>{description}</StyledP>
    </ColorDiv>
  )
}

export default AboutCard
