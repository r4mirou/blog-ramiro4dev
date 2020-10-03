import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from '../components/seo';

const Post = ({ data, pageContext }) => {
  const { file, markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const BackGroundImage = file ? file.childImageSharp.fluid : ""
  let bannerImagePath = `/assets/${frontmatter.featuredImage.childImageSharp.parent.name}${frontmatter.featuredImage.childImageSharp.parent.ext}`

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        article={true}
      />
      <div className={"blog-post-background-image"}>
        {BackGroundImage ? (
          <Img
            fixed={BackGroundImage}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={frontmatter.title + ' - Featured image'}
            className="featured-image"
            style={{ width: "100%", height: "100%", opacity: ".3" }}
          />
        ) : ""}
      </div>
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <div className={"article-author"}>
              <time>{frontmatter.date} - {frontmatter.author}</time>
            </div>
          </section>
          <div style={{ textAlign: "center" }}>
            <div
              className={"article-circle-border"} />
            <img src={bannerImagePath}
              className={"article-image"}
              alt="image banner" />
          </div>
        </header>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        >
        </div>
        <div style={{ marginTop: "30px" }}>
          <Link to={"/"}><RiArrowLeftLine /> Voltar para listagem</Link>
        </div>
      </article>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
    query BlogPostQuery($id: String!) {
      file(relativePath: { eq: "backgroundPost.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500, maxHeight: 900, quality: 80, srcSetBreakpoints: [350, 700, 1050, 1400]) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      markdownRemark( 
        id: { eq: $id }
      ) {
        id
        html
        excerpt(pruneLength: 148)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          author
          description
          featuredImage {
            childImageSharp {
              parent {
                ... on File {
                  name
                  ext
                }
              }
            }
          }
        }
      }
    }
  `