import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"
import Img from "gatsby-image"
import PortfolioPiece from "../components/PortfolioPiece"

const Header = styled.h1`
  margin: 0.5em 0;
  font-size: 2em;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media ${device.laptop} {
    font-size: 48px;
    margin: 1em 0;
  }
`

const Portfolio = ({ data }) => {
  const wizardImages = data.allFile.nodes.filter(d =>
    d.relativePath.includes("combine_wizard")
  )

  console.log(wizardImages)

  return (
    <Layout>
      <Header>Selected Projects </Header>
      <PortfolioPiece images={wizardImages} />
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
        relativePath
      }
    }
  }
`

export default Portfolio
