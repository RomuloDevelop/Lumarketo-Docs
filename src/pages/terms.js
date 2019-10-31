import React, {useState} from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from '@emotion/styled'
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const StyledLink = styled.a`
  font-size: 12;
`;

export default ({ data }) => {
  const [page, setPage] = useState(0);
  const pages = data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {node.frontmatter.title}{" "}
        <span
          css={css`
            color: #bbb;
          `}
        >
          — {node.frontmatter.date}
        </span>
      </h3>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  ));
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
            <StyledLink onClick = {() => setPage(0)}>Politicas de Privacidad</StyledLink>
          </li>
          <li>
            <StyledLink onClick = {() => setPage(1)}>Terminos y Condiciones</StyledLink>
          </li>
        </ul>
        <div
    css={css`
      padding: ${rhythm(1)};
      overflow: hidden;
    `}>
          {pages[page]}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}){
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
