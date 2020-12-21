import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"
import { portfolioData } from "../portfolioData"
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
  const pieces = portfolioData.map((d, i) => {
    const images = data.allFile.nodes.filter(node =>
      node.relativePath.includes(d.id)
    )
    return (
      <PortfolioPiece
        key={i}
        images={images}
        title={d.title}
        stack={d.stack}
        description={d.description}
        link={d.link}
      />
    )
  })

  return (
    <Layout>
      <Header>Selected Projects </Header>
      {pieces}
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
