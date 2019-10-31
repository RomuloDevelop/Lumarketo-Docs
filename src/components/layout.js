import React from "react"
import Helmet from "./metadata"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const cssNavLink = css`
  color: white;
  &:hover {
    color: whitesmoke;
  }
`;

const RightMenu = styled.div`
  display: flex;
  flex-direction: row;
`; 

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
    <Helmet/>
    <div
      css={css`
        background-color: #ee6400;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: ${rhythm(.5)};
        padding-top: ${rhythm(.5)};
        padding-left: ${rhythm(1)};
        padding-right: ${rhythm(1)};

      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            display: inline-block;
            margin-top: 0;
            ${cssNavLink};
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <RightMenu>
      <Link
        to={`/about/`}
        css={css`
          margin-right: ${rhythm(1)};
          ${cssNavLink}
        `}
      >
        About
      </Link>
      <Link
        to={`/terms/`}
        css={cssNavLink}
      >
        Terminos
      </Link>
      </RightMenu>
    </div>
    <div
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      {children}
    </div>
    </>
  )
}