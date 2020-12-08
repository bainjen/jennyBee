import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const StyledUl = styled.ul`
  list-style-type: none;
  /* text-align: justify;
  list-style-position: outside; */

  & li {
    margin-bottom: 1em;
    display: flex;
  }

  /* & li:nth-child(4n + 1)::before {
    content: "🥕 ";
  }

  & li:nth-child(4n + 2)::before {
    content: "🐶 ";
  }

  & li:nth-child(4n + 3)::before {
    content: "👾 ";
  }

  & li:nth-child(4n)::before {
    content: "🦠";
  } */
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
    /* margin-bottom: 20px; */
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

    <StyledH1>Coding Languages & Frameworks: </StyledH1>
    <StyledP>JavaScript | HTML | CSS | Node.js | Ruby on Rails | PSQL</StyledP>

    <StyledH1>Learning: </StyledH1>
    <StyledP>Python | AWS | TypeScript</StyledP>

    <StyledH1>Guilty Programming Pleasure: </StyledH1>
    <StyledP>
      Putzing around in React-Spring and otherwise adding animations to anything
      and everything.
    </StyledP>

    <StyledH1>Tidbits:</StyledH1>
    <StyledUl>
      <li>
        <span>🥕</span>{" "}
        <p>
          Trying new recipes and improving on old ones is my jam. I've never met
          a kitchen experiment I didn't enjoy.
        </p>
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
          My partner, James, is the Scully to my Mulder. We enjoy reality TV,
          getting scared while camping, and browsing bookstores for treasures.
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
