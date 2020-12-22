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
    background-color: ${props => props.theme.lightSalmon};

    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
  &.two {
    background-color: ${props => props.theme.salmon};
    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
  &.three {
    background-color: ${props => props.theme.sunflower};
    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
`
const StyledH2 = styled.h2`
  /* color: ${props => props.theme.green}; */
  color: white;
  text-transform: uppercase;
  margin-top: 0.25em;
  margin-bottom: 0.12em;
  font-size: 16px;
  letter-spacing: 2px;
  padding-top: 1em;
  @media ${device.laptop} {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-size: 26px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
`

const StyledP = styled.p`
  /* color: ${props => props.theme.green}; */
  letter-spacing: 2px;

  color: white;
  margin-bottom: 1em;
  & span {
    margin-left: 0.25em;
  }
  @media ${device.laptop} {
    /* text-align: justify; */
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 32px;
  }
`

const LineDiv = styled.div`
  color: white;
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
