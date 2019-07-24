import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.outer_container}>
    <div className={styles.inner_container}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <p className={styles.main_title}>{siteTitle}</p>
        <p className={styles.subtitle}>Web developer</p>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Header
