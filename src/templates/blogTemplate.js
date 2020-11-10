import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import "./blogTemplate.css"
import styled from "styled-components"

const BlogBodyContainer = styled.div`
  & p {
    font-size: 18px;
  }

  & p img {
    width: 50%;
  }
`

export default function Template({ data }) {
  const post = data.mdx
  const { title, author, date, description } = post.frontmatter

  return (
    <Layout>
      <div className="blogTemplate">
        <Link to="/blog">Back to blogs</Link>
        <h1 className="blogTemplate-title">{title}</h1>
        <h2 className="blogTemplate-description">{description}</h2>
        <p className="blogTemplate-posted-by">
          Posted by {author} on {date}
        </p>
        <BlogBodyContainer>
          <MDXRenderer>{post.body}</MDXRenderer>
        </BlogBodyContainer>
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
