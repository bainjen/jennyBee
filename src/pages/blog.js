import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Post from "../components/Post"
// export const AllBlogsQuery = graphql`
// {
//   "data": {
//     "allMarkdownRemark": {
//       "edges": [
//         {
//           "node": {
//             "frontmatter": {
//               "date": "2020-11-08",
//               "title": "My First Blog"
//             }
//           }
//         }
//       ]
//     }
//   },
//   "extensions": {}
// }
// `

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMdx {
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
    <h1>Blog</h1>

    {console.log(data)}
    {data.allMdx.edges.map(post => {
      const { title, author, date, description, path } = post.node.frontmatter

      return (
        <Post
          title={title}
          author={author}
          date={date}
          description={description}
          key={`${date}__${title}`}
          path={path}
        />
      )
    })}
  </Layout>
)

export default Blog
