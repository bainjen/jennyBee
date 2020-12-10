import React from "react"
import styled from "styled-components"
import { device } from "../devices"
import Layout from "../components/Layout"

const StyledH1 = styled.h1`
  font-size: 40px;
  margin-bottom: 0.5em;
`

const StyledH2 = styled.h2`
  font-size: 32px;
`
const StyledP = styled.p``

const Home = () => (
  <Layout>
    <StyledH1>Hello, friend!</StyledH1>
    <StyledH2>I'm Jennifer,</StyledH2>
    <StyledH2>a full stack web-developer.</StyledH2>
    <styledP>
      Thank you for stopping by. I'm thrilled you've made it! -- enjoy
      <span role="img" aria-label="sparkle heart">
        💖
      </span>
    </styledP>
  </Layout>
)

export default Home
