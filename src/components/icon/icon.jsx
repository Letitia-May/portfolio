import React from 'react'
import PropTypes from 'prop-types'
import styles from './icon.module.scss'

const Icon = ({ url, type }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.container}
  >
    <i className={'fab fa-' + type} />
  </a>
)

Icon.propTypes = {
  url: PropTypes.string,
}

export default Icon
