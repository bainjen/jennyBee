import React from "react"
import styled from "styled-components"
import { device } from "../devices"
import Img from "gatsby-image"

const PieceContainer = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3b0;

  padding: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
    margin-bottom: 2em;
  }
`
const ImageContainer = styled.div`
  @media ${device.laptop} {
    padding: 0 1rem;
    position: relative;
    width: 60%;
  }
`
const ImageDiv = styled(Img)`
  margin: 1em 0;
  border-radius: 8px;
`

const TextContainer = styled.div`
  margin-bottom: 1em;
  @media ${device.laptop} {
    position: -webkit-sticky;
    position: sticky;
    width: 40%;
    margin: 0;
    z-index: 0;
    top: 10vh;
    height: 100vh;
    padding: 0 1em;
  }
`

const Title = styled.h1`
  font-size: 32px;
  margin: 0.25em 0;
`
const Stack = styled.p`
  font-size: 20px;
  margin: 0.75em 0;
  @media ${device.mobileL} {
    font-size: 24px;
  }
`
const Description = styled.p`
  font-size: 16px;
  font-style: italic;
  margin: 0.25em 0 0.5em 0;
  text-align: justify;
`

const StyledH4 = styled.h4`
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 1em;
`

const RepoLink = styled.a`
  margin: 1em 0;
  color: ${props => props.theme.sunflower};

  &:visited {
    text-decoration: none;
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
    color: ${props => props.theme.darkSalmon};
  }
`

const PortfolioPiece = props => {
  const { images, title, stack, description, link, more } = props

  const portfolioImages = images.map((image, i) => {
    return <ImageDiv key={i} fluid={image.childImageSharp.fluid} />
  })

  return (
    <PieceContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Stack>{stack}</Stack>
        <StyledH4>Project Description: </StyledH4>
        <Description>{description}</Description>
        <StyledH4>What I learned: </StyledH4>
        <Description>{more}</Description>
        <RepoLink href={link} target="_blank">
          visit repository{" "}
        </RepoLink>
      </TextContainer>
      <ImageContainer>{portfolioImages}</ImageContainer>
    </PieceContainer>
  )
}

export default PortfolioPiece
