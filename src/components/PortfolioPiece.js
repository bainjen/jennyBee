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
  background-color: #f3f3f3;
  padding: 1rem;

  @media ${device.laptop} {
    flex-direction: row;
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
  margin: 0.5em 0;
  @media ${device.mobileL} {
    font-size: 24px;
    margin: 0.25em 0;
  }
`
const Description = styled.p`
  font-size: 16px;
  font-style: italic;
  margin: 0.25em 0 0.5em 0;
  text-align: justify;
`

const RepoLink = styled.a`
  margin: 1em 0;
  color: ${props => props.theme.lilac};

  &:visited {
    text-decoration: none;
    color: ${props => props.theme.mustard};
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.tan};
  }
`

const PortfolioPiece = props => {
  const { images } = props

  const portfolioImages = images.map((image, i) => {
    return <ImageDiv key={i} fluid={image.childImageSharp.fluid} />
  })

  return (
    <PieceContainer>
      <TextContainer>
        <Title>Combine Wizard</Title>
        <Stack>React | GraphQL | DynamoDB | AWS Amplify | AWS Lambda</Stack>
        <Description>
          This project is designed to help farmers evaluate autonomous combine
          [harvesting tractor] performance. Users can specify auger length, fuel
          type, and a wheel size to create a combine. Once a configuration is
          added, a simulation test fires every hour to measure the time that
          each particular combine takes to plane a 10 x 10 acre field, the
          percentage of the field covered, and the cost of the run. The
          efficiency value of each simulation run is averaged to make an overall
          efficiency measure for each combine configuration.
        </Description>
        <RepoLink href="https://github.com/bainjen/CARS" target="_blank">
          visit repository{" "}
        </RepoLink>
      </TextContainer>
      <ImageContainer>
        {portfolioImages}
        {/* <ImageDiv fluid={tempImg} />
        <ImageDiv fluid={tempImg} />
        <ImageDiv fluid={tempImg} />
        <ImageDiv fluid={tempImg} /> */}
      </ImageContainer>
    </PieceContainer>
  )
}

export default PortfolioPiece
