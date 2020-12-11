import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const StyledUl = styled.ul`
  list-style-type: none;
  font-size: 16px;

  & li {
    margin-bottom: 1em;
    display: flex;
  }

  & span {
    margin-right: 1em;
  }

  @media ${device.laptop} {
    font-size: 24px;
    /* color: ${props => props.theme.salmon}; */
    /* text-transform: lowercase;
    font-weight: lighter; */
  }
`
const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`
const AboutDiv = styled.div`
  /* padding-right: 3em; */
  margin-top: 3em;
  @media ${device.laptop} {
    width: 40vw;
    margin-top: 0;
    margin-right: 8em;
  }
`
const AboutImg = styled.div`
  background: url("/static/5dd551b627c9c3d876134ad7fe8c05e0/21d0b/yellowLeaves.jpg")
    right bottom;
  background-size: cover;
  /* width: 80vw; */
  height: 300px;

  @media ${device.laptop} {
    background-size: cover;
    width: 50%;
    height: auto;
    /* margin: 3.5em; */
  }
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.green};
  /* margin-bottom: 20px; */
  text-transform: uppercase;
  margin-top: 0.25em;
  margin-bottom: 0.12em;
  font-size: 24px;
  letter-spacing: 2px;
  @media ${device.laptop} {
    font-size: 28px;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
  }

  &.tidbits {
    margin-top: 2em;
    margin-bottom: 1em;
  }
`

const StyledH2 = styled.h2`
  color: ${props => props.theme.lilac};
  /* margin-bottom: 20px; */
  text-transform: uppercase;
  margin-top: 0.25em;
  margin-bottom: 0.12em;
  font-size: 16px;
  letter-spacing: 2px;
  padding-top: 1em;
  @media ${device.laptop} {
    /* font-size: 16px; */
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`

const StyledP = styled.p`
  color: ${props => props.theme.green};
  margin-bottom: 1em;
  & span {
    margin-left: 0.25em;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`

const LineDiv = styled.div`
  border-bottom: solid 1px;
  /* padding-bottom: 1em; */
  padding-top: 1em;
`
const pageBreak = <LineDiv />

const About = () => (
  <Layout>
    <ContainerDiv>
      <AboutImg src="/static/5dd551b627c9c3d876134ad7fe8c05e0/21d0b/yellowLeaves.jpg" />
      <AboutDiv>
        <StyledH1>About</StyledH1>
        <StyledP>
          I'm a web developer with a keen eye for detail. I enjoy problem
          solving and finding ways to make web apps more intuitive and enjoyable
          for users. Currently, I reside in Calgary, AB
        </StyledP>

        <StyledP>{pageBreak}</StyledP>

        <StyledH2>Languages & Frameworks </StyledH2>
        <StyledP>
          JavaScript | HTML | CSS | Node.js | Ruby on Rails | PSQL
        </StyledP>
        <StyledP>{pageBreak}</StyledP>
        <StyledH2>Learning </StyledH2>
        <StyledP>Python | AWS | TypeScript</StyledP>
        <StyledP>{pageBreak}</StyledP>
        <StyledH2>Guilty Programming Pleasure </StyledH2>
        <StyledP>
          Putzing around in React-Spring and adding animations to anything and
          everything.
        </StyledP>
        <StyledP>{pageBreak}</StyledP>
      </AboutDiv>
    </ContainerDiv>
    <StyledH1 className="tidbits">Tidbits</StyledH1>
    <StyledUl>
      <li>
        <span role="img" aria-label="carrot">
          🥕
        </span>

        <p>I've never met a kitchen experiment I didn't enjoy.</p>
      </li>
      <li>
        <span role="img" aria-label="dog">
          🐕{" "}
        </span>
        <p>
          Yes, I'm a dog person. I like cats, too. Followed closely by gibbons
          and snails.
        </p>
      </li>
      <li>
        <span role="img" aria-label="alien">
          👾
        </span>{" "}
        <p>
          I live with my partner, James and two little monsters, Pippa &
          Prairie. We enjoy reality TV, getting scared while camping, and
          browsing bookstores for treasures.
        </p>
      </li>
      <li>
        <span role="img" aria-label="germ">
          🦠
        </span>
        <p>
          We're currently growing kombucha SCOBYs named Christopher and Nova
          Scoby.
        </p>
      </li>
    </StyledUl>
  </Layout>
)

export default About
