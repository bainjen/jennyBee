import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../devices"
import Layout from "../components/Layout"
import BackgroundImage from "gatsby-background-image"

const WrapperDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
const ImageDiv = styled(BackgroundImage)`
  background-position: bottom right;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  padding-left: 12vw;
  padding-top: 210px;

  @media ${device.laptopL} {
    padding-top: 300px;
  }

  @media ${device.desktop} {
    padding-top: 400px;
  }
  @media ${device.desktop} {
    padding-left: 16vw;

    padding-top: 500px;
  }
`

const StyledH1 = styled.h1`
  font-size: 20px;
  margin-bottom: 25px;
  color: white;
  font-weight: 600;
  background: #e36346;
  padding: 10px;
  padding-right: 10px;
  width: fit-content;

  @media ${device.mobileL} {
    font-size: 24px;
    padding-right: 40px;
    font-weight: 700;
  }

  @media ${device.tabletS} {
    font-size: 32px;
    padding-right: 40px;
    font-weight: 700;
  }

  @media ${device.tablet} {
    font-size: 40px;
    padding-right: 75px;
    font-weight: 900;
  }

  @media ${device.laptop} {
    font-size: 48px;
  }

  @media ${device.laptopL} {
    font-size: 56px;
    padding-right: 100px;
  }

  @media ${device.desktop} {
    font-size: 72px;
    padding-right: 200px;
  }
`

const StyledP = styled.p`
  color: white;
  font-size: 16px;
  margin-top: 1em;
  font-weight: 500;
  padding: 10px;
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
`

const Home = props => {
  const imgPath = props.data.file.childImageSharp.fluid
  // stacking images -- adds gradient over image path
  const backgroundStack = [
    `linear-gradient(to bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0))`,
    imgPath,
  ]

  const path = props.path

  return (
    <Layout isMainPage={true}>
      <WrapperDiv>
        <ImageDiv fluid={backgroundStack}>
          <StyledH1>Hello, friend!</StyledH1>
          <StyledH1>I'm Jennifer,</StyledH1>
          <StyledH1>a full stack web developer.</StyledH1>
          <StyledP>
            Thank you for stopping by. <br></br>I'm thrilled you've made it! --
            enjoy
            <span role="img" aria-label="sunflower">
              🌻
            </span>
          </StyledP>
        </ImageDiv>
      </WrapperDiv>
    </Layout>
  )
}

export const HomeImageQuery = graphql`
  query HomeImageQuery {
    file(relativePath: { eq: "reach.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
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
`

export default Home
