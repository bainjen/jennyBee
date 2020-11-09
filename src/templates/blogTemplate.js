import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import "./blogTemplate.css"

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
        <MDXRenderer>{post.body}</MDXRenderer>
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
