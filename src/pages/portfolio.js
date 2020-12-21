import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const Header = styled.h1`
  font-size: 48px;
  margin: 1em 0;
`
const ImageContainer = styled.div``
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 32px;
  margin: 0.25em 0;
`
const Stack = styled.p`
  font-size: 24px;
`
const Description = styled.p`
  font-size: 16px;
  font-style: italic;
`

const RepoLink = styled.a``
const Portfolio = () => (
  <Layout>
    <Header>Selected Projects </Header>

    <TextContainer>
      <Title>Combine Wizard</Title>
      <Stack>React | GraphQL | DynamoDB | AWS Amplify | AWS Lambda</Stack>
      <Description>
        This project is designed to help farmers evaluate autonomous combine
        [harvesting tractor] performance. Users can specify auger length, fuel
        type, and a wheel size to create a combine. Once a configuration is
        added, a simulation test fires every hour to measure the time that each
        particular combine takes to plane a 10 x 10 acre field, the percentage
        of the field covered, and the cost of the run. The efficiency value of
        each simulation run is averaged to make an overall efficiency measure
        for each combine configuration.
      </Description>
      <RepoLink>visit repository </RepoLink>
    </TextContainer>
    <ImageContainer>
      <img></img>
    </ImageContainer>
  </Layout>
)

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
