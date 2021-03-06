import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { device } from "../devices"
import BlogCard from "../components/BlogCard"

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 2vw;
  row-gap: 2vw;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const StyledH1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1em 0;
  font-size: 2em;
  @media ${device.laptop} {
    font-size: 48px;
  }
`
export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            author
            date
            description
            path
            title
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <StyledH1>Read my mind</StyledH1>
    <PostsContainer>
      {data.allMdx.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter

        return (
          <BlogCard
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })}
    </PostsContainer>
  </Layout>
)

export default Blog
