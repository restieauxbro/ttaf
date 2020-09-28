import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit,
        dolor aspernatur tenetur sint dignissimos ipsum rem quis esse sunt ipsa
        corrupti, obcaecati itaque animi similique? Repellat minima recusandae
        magnam dolor, sed quod consequatur dolore tempore ipsa in. Optio
        corporis architecto non necessitatibus quod amet quas maiores molestias
        debitis delectus totam, perferendis aut excepturi magni, quos similique
        laborum ipsam. Magni vel rerum officia ab adipisci! Necessitatibus,
        quibusdam officiis consectetur corporis non, velit nobis exercitationem
        labore reprehenderit deserunt aut inventore temporibus, neque ipsam id
        ab iure porro. Alias, exercitationem doloremque unde ducimus libero
        nisi! Molestias sapiente nobis, mollitia provident soluta repellat?
        <br /> <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla commodi
        quaerat provident! Eligendi aperiam, ab totam reprehenderit velit ad
        consequatur soluta voluptates nulla laborum vero! Sint doloribus
        expedita eos. Culpa magnam recusandae, tempora vel expedita veritatis
        excepturi maxime vitae maiores amet quisquam, quas fugiat? Cum
        doloremque rerum repellat, fugiat quam libero, perferendis quasi tempora
        id, molestias soluta voluptates. Quidem molestiae dolorum hic iusto,
        sapiente nostrum qui accusantium voluptates, commodi perspiciatis
        mollitia corporis excepturi praesentium vitae, tempora cupiditate
        deserunt veritatis voluptate!
      </p>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
