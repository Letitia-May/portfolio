import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './layout.module.scss'

import '../../styles/normalize.css'
import '../../styles/main.scss'
import Header from '../header/header'

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
      <div className={styles.container}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.page_content}>{children}</div>
        <div className={styles.footer}>
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
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
