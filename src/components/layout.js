import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import '../styles/normalize.css'
import GlobalStyle from '../styles/global'
import Header from './header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const PageContent = styled.div`
  margin: 0 auto;
  padding: 0px 1rem 1.5rem;
  flex: 1;
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
        <Container>
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          <PageContent>{children}</PageContent>
          <Footer>
            © {new Date().getFullYear()}, Built with{` `}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            <br />
            Source available on{` `}
            <a
              href="https://github.com/Letitia-May/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
