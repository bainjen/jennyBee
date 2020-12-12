import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const StyledUl = styled.ul`
  list-style-type: none;
  font-size: 16px;
  padding-bottom: 1em;

  & li {
    margin-bottom: 1em;
    display: flex;
  }

  & span {
    margin-right: 1em;
  }

  @media ${device.laptop} {
    font-size: 24px;
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
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  @media ${device.laptop} {
    margin-top: 0;
  }
`
const AboutImg = styled.div`
  background: url("/static/5dd551b627c9c3d876134ad7fe8c05e0/21d0b/yellowLeaves.jpg")
    right bottom;
  background-size: cover;
  height: 300px;

  @media ${device.laptop} {
    display: none;
  }

  &.fork {
    background: url("/static/390cbe93f601968ef48231b812a0e7c3/21d0b/fork.jpg")
      bottom center;
    display: block;
    height: 250px;
    background-size: cover;
    border-radius: 15px;
  }
`

const Colors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  margin-bottom: 20px;

  &.about {
    margin-bottom: 3vh;
    @media ${device.laptop} {
      margin-bottom: 75px;
    }
  }
  &.one {
    background-color: ${props => props.theme.peach};

    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
  &.two {
    /* background-color: ${props => props.theme.softPink};
   */
    background-color: bisque;
    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
  &.three {
    background-color: ${props => props.theme.shutters};
    @media ${device.laptop} {
      width: 30%;
      height: 350px;
    }
  }
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.green};
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
  color: ${props => props.theme.green};
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
    font-size: 24px;
  }
`

const StyledP = styled.p`
  color: ${props => props.theme.green};
  margin-bottom: 1em;
  & span {
    margin-left: 0.25em;
  }
  @media ${device.laptop} {
    text-align: justify;
    &.aboutP {
      font-size: 24px;
    }
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
      {/* <AboutImg src="/static/5dd551b627c9c3d876134ad7fe8c05e0/21d0b/yellowLeaves.jpg" /> */}
      <AboutDiv>
        <ColorDiv className="about">
          <StyledH1>About</StyledH1>
          <StyledP className="aboutP">
            I'm a web developer with a keen eye for detail. I enjoy problem
            solving and finding ways to make web apps more intuitive and
            enjoyable for users.
            <br></br>
            --------
            <br></br>Before switching careers, I worked as an executive
            assistant and an ESL teacher. These experiences provided an
            excellent opportunity to hone my communication and organizational
            skills while learning a lot about how humans interact with
            technology for both work and learning purposes.
            <br></br>
            --------
            <br></br>
            My love for helping people is what propels me to create apps! It's
            exciting to make something that people want to use, or at the very
            least, something they don't curse using.
            <br></br>
            --------
            <br></br>Currently, I reside in Calgary, AB
          </StyledP>

          {/* <StyledP>{pageBreak}</StyledP> */}
        </ColorDiv>
        <Colors>
          <ColorDiv className="one">
            <StyledH2>Languages & Frameworks </StyledH2>
            <StyledP>{pageBreak}</StyledP>
            <StyledP>
              JavaScript | HTML | CSS | Node.js | Ruby on Rails | PSQL
            </StyledP>
          </ColorDiv>
          <ColorDiv className="two">
            <StyledH2>Learning </StyledH2>
            <StyledP>{pageBreak}</StyledP>
            <StyledP>Python | AWS | TypeScript</StyledP>
          </ColorDiv>
          <ColorDiv className="three">
            <StyledH2>Guilty Programming Pleasure </StyledH2>
            <StyledP>{pageBreak}</StyledP>
            <StyledP>
              Putzing around in React-Spring and adding animations to anything
              and everything.
            </StyledP>
          </ColorDiv>
        </Colors>
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
    <AboutImg className="fork"></AboutImg>
    {/* <AboutImg className="fork"></AboutImg> */}
  </Layout>
)

export default About
