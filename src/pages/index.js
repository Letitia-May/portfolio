import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import '../styles/normalize.css'
import '../styles/main.scss'
import styles from './index.module.scss'
import SEO from '../components/seo/seo'
import Icon from '../components/icon/icon'

const IndexPage = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        crossorigin="anonymous"
      />
    </Helmet>
    <div className={styles.main_layout}>
      <SEO title="Home" keywords={[`Chloe Kuypers`, `developer`]} />
      <div className={styles.main_content}>
        <h1>Chloe Kuypers</h1>
        <hr />
        <h2>Web developer</h2>
        <Icon type="github" url="https://github.com/Letitia-May" />
        <Icon type="linkedin-in" url="https://au.linkedin.com/in/ckuypers" />
        <Icon type="twitter" url="https://twitter.com/letitia_may" />
      </div>
      <Link to="/projects/">
        <button>Projects</button>
      </Link>
    </div>
  </>
)

export default IndexPage
