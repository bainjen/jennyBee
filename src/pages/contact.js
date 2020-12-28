import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    margin-left: 15%;
  }
  @media ${device.mobileL} {
    margin-left: 25%;
  }
  @media ${device.tablet} {
    margin-left: 35%;
  }
  @media ${device.laptop} {
    margin-left: 33%;
  }
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.green};
  /* margin-bottom: 20px; */
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  font-size: 2em;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media ${device.laptop} {
    /* font-size: 32px; */
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    font-size: 48px;
  }
`
const StyledLink = styled.a`
  color: ${props => props.theme.green};

  &:visited {
    text-decoration: none;
    color: ${props => props.theme.sunflower};
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.lightSalmon};
  }
`

const StyledP = styled.p`
  font-size: 14px;
  color: ${props => props.theme.green};
  margin-bottom: 1em;
  & span {
    margin-right: 1em;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`

const StyledH6 = styled.h6`
  margin: auto;
  font-size: 16px;
  font-weight: 200;
  color: ${props => props.theme.green};
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`

const Contact = () => {
  return (
    <Layout>
      <CenterDiv>
        <StyledH1>Contact</StyledH1>
        <StyledP>
          <StyledLink href="mailto: jennifer.fleming.bain@gmail.com">
            <span>💌</span>
            jennifer.fleming.bain@gmail.com
          </StyledLink>
        </StyledP>
        <StyledP>
          <StyledLink href="https://github.com/bainjen" target="_blank">
            <span>🗃</span>
            Github
          </StyledLink>
        </StyledP>
        <StyledP>
          <StyledLink
            href="https://www.linkedin.com/in/jennifer-fleming-bain-09b364a0/"
            target="_blank"
          >
            <span>🙋‍♀️</span>
            LinkedIn
          </StyledLink>
        </StyledP>

        {/* <StyledH6>I'd love to hear from you!</StyledH6> */}
      </CenterDiv>
      <StyledH6>Want to collaborate? Me too! Don't be a stranger 👋</StyledH6>
    </Layout>
  )
}

export default Contact
