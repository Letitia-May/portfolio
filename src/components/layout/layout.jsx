import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import '../../styles/normalize.css'
import '../../styles/main.scss'
import styles from './layout.module.scss'
import Header from '../header/header'
import Icon from '../icon/icon'

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
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossorigin="anonymous"
          />
        </Helmet>
        <div className={styles.container}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={styles.page_content}>{children}</div>
          <div className={styles.footer}>
            <div className={styles.footer_content}>
              <div className={styles.icons}>
                <Icon type="github" url="https://github.com/Letitia-May" />
                <Icon type="linkedin-in" url="https://au.linkedin.com/in/ckuypers" />
                <Icon type="twitter" url="https://twitter.com/letitia_may" />
              </div>
              <div className={styles.links}>
                <p>
                  © {new Date().getFullYear()}, Built with{` `}
                  <a
                    href="https://www.gatsbyjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gatsby
              </a>
                </p>
                <p>
                  Source available on{` `}
                  <a
                    href="https://github.com/Letitia-May/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
              </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
