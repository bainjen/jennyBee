import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const StyledUl = styled.ul`
  list-style-type: none;

  & li {
    margin-bottom: 1em;
    display: flex;
  }

  & span {
    margin-right: 1em;
  }
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.green};
  /* margin-bottom: 20px; */
  margin-top: 0.25em;
  margin-bottom: 0.12em;
  font-size: 24px;
  @media ${device.laptop} {
    font-size: 28px;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
  }
`

const StyledP = styled.p`
  color: ${props => props.theme.green};
  margin-bottom: 1em;
  @media ${device.laptop} {
  }
`

const About = () => (
  <Layout>
    <StyledH1>About</StyledH1>
    <StyledP>
      I'm a web developer with a keen eye for detail. I enjoy problem solving
      and finding ways to make technology more intuitive and enjoyable for
      users. 💫
    </StyledP>

    <StyledH1>Languages & Frameworks: </StyledH1>
    <StyledP>JavaScript | HTML | CSS | Node.js | Ruby on Rails | PSQL</StyledP>

    <StyledH1>Learning </StyledH1>
    <StyledP>Python | AWS | TypeScript</StyledP>

    <StyledH1>Guilty Programming Pleasure </StyledH1>
    <StyledP>
      Putzing around in React-Spring and adding animations to anything and
      everything.
    </StyledP>

    <StyledH1>Tidbits</StyledH1>
    <StyledUl>
      <li>
        <span>🥕</span>{" "}
        <p>I've never met a kitchen experiment I didn't enjoy.</p>
      </li>
      <li>
        <span>🐕 </span>
        <p>
          Yes, I'm a dog person. I like cats, too. Followed closely by gibbons
          and snails.
        </p>
      </li>
      <li>
        <span>👾</span>{" "}
        <p>
          I live with my partner, James and two little monsters, Pippa &
          Prairie. We enjoy reality TV, getting scared while camping, and
          browsing bookstores for treasures.
        </p>
      </li>
      <li>
        <span>🦠</span>
        <p>
          We're currently growing kombucha SCOBYs named Christopher and Nova
          Scoby.
        </p>
      </li>
    </StyledUl>
  </Layout>
)

export default About
