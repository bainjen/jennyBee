import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { device } from "../devices"

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 3em 0;

  @media ${device.tablet} {
    align-items: center;
    margin: 5em 0 7em 0;
  }
`
const BlogTitle = styled.h1`
  color: ${props => props.theme.green};
  margin: 24px 0 24px;
`

const StyledH2 = styled.h2`
  color: ${props => props.theme.green};
  font-size: 1.2em;
  margin: 24px 0 24px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
`
const StyledH3 = styled.h3`
  color: ${props => props.theme.green};
  font-size: 1.2em;
  margin: 24px 0 24px;
  text-transform: uppercase;
  font-weight: 600;
`

const StyledH6 = styled.h6`
  color: ${props => props.theme.green};
  font-size: 1em;
  margin: 24px 0 24px;
  font-weight: 600;
`
const StyledUL = styled.ul`
  color: ${props => props.theme.green};
  margin: 12px 0 12px;
  font-size: 1em;
  list-style-type: square;
  font-weight: 300;
  @media ${device.mobileL} {
    font-size: 1.2em;
    letter-spacing: 1px;
  }
`
const Description = styled.p`
  font-style: italic;
  margin: 12px 0 12px 0;
  font-size: 1em;

  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`
const StyledP = styled.p`
  color: ${props => props.theme.green};
  margin: 16px 0 16px;
  font-size: 1em;
  font-weight: 300;

  @media ${device.mobileL} {
    font-size: 1.2em;
    letter-spacing: 1px;
  }
`

const StyledBlogImage = styled.img`
  margin: 24px 0 24px;
  max-width: 80vw;
  @media ${device.tablet} {
    max-height: 50vh;
  }
`
const StyledLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.lilac};

  &:visited {
    text-decoration: none;
    color: ${props => props.theme.midGreen};
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.midGreen};
  }
`
const BackButton = styled.button`
  background-color: white;
  color: ${props => props.theme.green};
  text-decoration: none;
  padding: 0.75em;
  font-size: 16px;
  width: 6em;
  border-radius: 12px;
  border: solid ${props => props.theme.green};

  &a {
    text-decoration: none;
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
    /* color: ${props => props.theme.salmon};
    border: solid ${props => props.theme.salmon}; */
    outline: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.midGreen};
    border: solid ${props => props.theme.midGreen};
  }
`

export default function Template({ data }) {
  const post = data.mdx
  const { title, author, date, description } = post.frontmatter
  const [year, month, day] = date.split("-")

  return (
    <Layout>
      <div className="blogTemplate">
        {/* <Link to="/blog">
          <BackButton>Back</BackButton>
        </Link> */}
        <Header>
          <BlogTitle className="blogTemplate-title">{title}</BlogTitle>
          <Description className="blogTemplate-description">
            {description}
          </Description>
          <StyledP>{`posted on ${month}/${day}/${year}`}</StyledP>
          {/* Posted by {author} on {date} */}
        </Header>

        <MDXProvider
          components={{
            p: StyledP,
            img: StyledBlogImage,
            h2: StyledH2,
            h3: StyledH3,
            h6: StyledH6,
            ul: StyledUL,
            a: StyledLink,
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>

        <Link to="/blog">
          <BackButton>Back</BackButton>
        </Link>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        description
        path
        title
      }
      body
      id
    }
  }
`
