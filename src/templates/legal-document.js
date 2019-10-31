import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from '@emotion/styled'
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const StyledLink = styled(Link)`
  font-size: 12;
`;

export default ({ data }) => {
  const mdpage = data.markdownRemark;
  const page = () => (
    <div>
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {mdpage.frontmatter.title}{" "}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: mdpage.html }} />
    </div>
  );
  return (
    <Layout>
      <div css={css`
        display: flex;
        flex-direction: column;
        @media (min-width: 520px) {
          flex-direction: row;
        }
      `}>
        <ul>
          <li>
            <StyledLink to = {data.allMarkdownRemark.edges[0].node.fields.slug}>Politicas de Privacidad</StyledLink>
          </li>
          <li>
            <StyledLink to = {data.allMarkdownRemark.edges[1].node.fields.slug}>Terminos y Condiciones</StyledLink>
          </li>
        </ul>
        <div css={css`
          padding: ${rhythm(1)};
          overflow: hidden;
        `}>
          {page()}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    },
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}){
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`
