import React from "react"
import styled from "styled-components"
import { device } from "../devices"
import Layout from "../components/Layout"

const ImageDiv = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
    url("/static/a70c7c9238902b4a25c534ac56933199/21d0b/reach.jpg") no-repeat
      bottom right;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  padding-left: 12vw;
  padding-top: 210px;

  @media ${device.laptopL} {
    /* padding-left: 16vw; */
    /* padding-top: 33vh; */
    padding-top: 300px;
  }

  @media ${device.desktop} {
    /* padding-left: 16vw; */
    /* padding-top: 33vh; */
    padding-top: 400px;
  }
  @media ${device.desktop} {
    padding-left: 16vw;
    /* padding-top: 33vh; */
    padding-top: 500px;
  }
`

const StyledH1 = styled.h1`
  font-size: 20px;
  margin-bottom: 25px;
  color: white;
  font-weight: 600;
  /* background: ${props => props.theme.salmon}; */
  //hand orange
  background: #e36346;
  // hand pink
  /* background: #f99a90; */
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
    /* padding-right: 100px; */
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
  /* background: #ebc091; */
  padding: 10px;
  /* padding-right: 100px; */
  @media ${device.laptop} {
    font-size: 24px;
  }
  @media ${device.desktop} {
    font-size: 40px;
  }
`

const Home = () => (
  <Layout>
    <ImageDiv>
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
  </Layout>
)

export default Home
