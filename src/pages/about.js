import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../devices"
import AboutCard from "../components/AboutCard"

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
`
const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 3em;
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
    background: url(${props => props.srcURL}) bottom center;
    display: block;
    height: 250px;
    background-size: cover;
    border-radius: 15px;
    filter: brightness(1.2);
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

const StyledH1 = styled.h1`
  color: ${props => props.theme.green};
  text-transform: uppercase;
  margin-top: 0.25em;
  margin-bottom: 0.12em;
  font-size: 2em;
  letter-spacing: 2px;
  @media ${device.laptop} {
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    font-size: 48px;
  }

  &.tidbits {
    margin-top: 2em;
    margin-bottom: 1em;
    @media ${device.laptop} {
      margin-top: 0.5em;
      margin-bottom: 0.25em;
      font-size: 48px;
    }
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

const cardInfo = [
  {
    className: "one",
    title: "Languages & Frameworks",
    description: " JavaScript | HTML | CSS | Node.js | Ruby on Rails | PSQL",
  },
  {
    className: "two",
    title: "Currently Learning",
    description: " Python | AWS | TypeScript",
  },
  {
    className: "three",
    title: "Guilty Programming Pleasure",
    description:
      " Putzing around in React-Spring and adding animations to anything and everything.",
  },
]

const About = props => {
  const imgPath = props.data.imageSharp.original.src

  const cards = cardInfo.map(c => {
    return (
      <AboutCard
        key={c.className}
        title={c.title}
        description={c.description}
        className={c.className}
      />
    )
  })
  return (
    <Layout>
      <ContainerDiv>
        <AboutDiv>
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
        </AboutDiv>
        <Colors>{cards}</Colors>
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
      <AboutImg srcURL={imgPath} className="fork"></AboutImg>
    </Layout>
  )
}

export const FooterImageQuery = graphql`
  query FooterImageQuery {
    imageSharp(id: { eq: "70df6883-378c-56cc-8b59-5c53e388dc22" }) {
      original {
        src
      }
    }
  }
`
export default About
