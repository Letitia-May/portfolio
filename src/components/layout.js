import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import GlobalStyle from '../styles/global'
import '../styles/normalize.css'

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Footer = styled.footer`
  border-top: 1px solid var(--pink);
  margin: 1rem;
  padding: 1rem;
  text-align: right;
  font-size: 0.75rem;
  line-height: 1.5;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageContent>{children}</PageContent>
        <Footer>
          © {new Date().getFullYear()}, Built with{` `}
          <a href="https://www.gatsbyjs.org" target="_blank">
            Gatsby
          </a>
          <br />
          Source available on{` `}
          <a href="https://github.com/Letitia-May/portfolio" target="_blank">
            Github
          </a>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
