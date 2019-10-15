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
      <div className={styles.dark_half}>
        <div className={styles.dark_content}>
          <h1>Chloe Kuypers</h1>
          <h2>Web developer</h2>
          <span className={styles.icons}>
            <Icon type="github" url="https://github.com/Letitia-May" />
            <Icon type="linkedin-in" url="https://au.linkedin.com/in/ckuypers" />
            <Icon type="twitter" url="https://twitter.com/letitia_may" />
          </span>
        </div>
      </div>
      <div className={styles.light_half}>
        <div className={styles.light_content}>
          <p>Hi there! I'm a developer based in Munich, Germany, and I enjoy building user-centric and responsive front-ends.</p>
          <p>I currently work as a consultant with ThoughtWorks, and before entering the world of technology my background was in Human Resources and project management.</p>
          <p>I'm passionate about growing and supporting the tech community. I've been apart of creating Female Coders Lab (both in <a href="https://www.meetup.com/Female-Coders-Lab-Melbourne/">Melbourne</a> and <a href="https://www.meetup.com/Female-Coders-Lab-Munchen/">Munich</a>), as well as the Junior Dev Social <a href="https://www.meetup.com/Junior-Developers-Melbourne/">meetup</a>.</p>
          <Link to="/projects/">
            <button className={styles.project_button}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
