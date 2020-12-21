import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"
import Img from "gatsby-image"

const Header = styled.h1`
  font-size: 48px;
  margin: 1em 0;
`
const PieceContainer = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #f3f3f3;
  padding: 1rem;
  & > * {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
`
const ImageContainer = styled.div`
  position: relative;
  padding: 0 1rem;
  max-width: 50rem;
`
const TextContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  margin: 0;
  z-index: 0;
  top: 10vh;
  height: 100vh;
`

const Title = styled.h1`
  font-size: 32px;
  margin: 0.25em 0;
`
const Stack = styled.p`
  font-size: 24px;
  margin: 0.25em 0;
`
const Description = styled.p`
  font-size: 16px;
  font-style: italic;
  margin: 0.25em 0;
`

const RepoLink = styled.a``

const Portfolio = ({ data }) => {
  console.log("data", data)
  const tempImg = data.allFile.nodes[0].childImageSharp.fluid
  return (
    <Layout>
      <Header>Selected Projects </Header>
      <PieceContainer>
        <TextContainer>
          <Title>Combine Wizard</Title>
          <Stack>React | GraphQL | DynamoDB | AWS Amplify | AWS Lambda</Stack>
          <Description>
            This project is designed to help farmers evaluate autonomous combine
            [harvesting tractor] performance. Users can specify auger length,
            fuel type, and a wheel size to create a combine. Once a
            configuration is added, a simulation test fires every hour to
            measure the time that each particular combine takes to plane a 10 x
            10 acre field, the percentage of the field covered, and the cost of
            the run. The efficiency value of each simulation run is averaged to
            make an overall efficiency measure for each combine configuration.
          </Description>
          <RepoLink>visit repository </RepoLink>
        </TextContainer>
        <ImageContainer>
          <Img fluid={tempImg} />
          <Img fluid={tempImg} />
          <Img fluid={tempImg} />
          <Img fluid={tempImg} />
        </ImageContainer>
      </PieceContainer>
    </Layout>
  )
}
export const PortfolioImageQuery = graphql`
  query PortfolioImageQuery {
    allFile(filter: { relativeDirectory: { eq: "portfolioImages" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 50, maxWidth: 800) {
            aspectRatio
            base64
            src
            srcSet
            srcSetWebp
            srcWebp
            sizes
          }
        }
      }
    }
  }
`

export default Portfolio
