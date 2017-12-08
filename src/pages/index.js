import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      {posts.map(({ node: post }) => {
        const { frontmatter } = post

        return (
          <div>
            <h2>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <p>{frontmatter.date}</p>
              <p>{frontmatter.excerpt}</p>
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.object,
}
