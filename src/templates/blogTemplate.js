import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout"
// import "./blogTemplate.css"
import styled from "styled-components"
import { device } from "../devices"

// const BlogBodyContainer = styled.div`
//   & p {
//     font-size: 18px;
//   }

//   & p img {
//     width: 50%;
//   }
// `
const BlogTitle = styled.h1`
  color: ${props => props.theme.green};
  margin: 80px 0 24px;
`

const StyledH2 = styled.h2`
  color: ${props => props.theme.green};
  font-size: 1.2em;
  margin: 24px 0 24px;
  text-transform: uppercase;
  font-weight: 600;
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
  /* text-transform: uppercase; */
  font-weight: 600;
`
const StyledUL = styled.ul`
  color: ${props => props.theme.green};
  margin: 12px 0 12px;
  font-size: 1em;
  list-style-type: square;
  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`
const Description = styled.p`
  font-style: italic;
  /* font-weight: bold; */
  margin-bottom: 24px;
`
const StyledP = styled.p`
  color: ${props => props.theme.green};
  margin: 16px 0 16px;
  font-size: 1em;

  @media ${device.mobileL} {
    font-size: 1.2em;
  }
`
// const Code = styled.code`
//   color: ${props => props.theme.salmon};
// `

const StyledImage = styled.img`
  /* width: 50vw; */
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
    /* color: bisque; */
    color: ${props => props.theme.salmon};
    /* color: ${props => props.theme.shutter}; */
  }
  &:link {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.dustyRose};
  }
`

export default function Template({ data }) {
  const post = data.mdx
  const { title, author, date, description } = post.frontmatter

  return (
    <Layout>
      <div className="blogTemplate">
        <Link to="/blog">Back to blogs</Link>
        <BlogTitle className="blogTemplate-title">{title}</BlogTitle>
        <Description className="blogTemplate-description">
          {description}
        </Description>
        {/* <p className="blogTemplate-posted-by"> */}
        {/* Posted by {author} on {date} */}
        {/* </p> */}

        <MDXProvider
          components={{
            p: StyledP,
            img: StyledImage,
            h2: StyledH2,
            h3: StyledH3,
            h6: StyledH6,
            ul: StyledUL,
            a: StyledLink,
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
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
