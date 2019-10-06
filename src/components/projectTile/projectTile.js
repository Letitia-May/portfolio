import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './projectTile.module.scss'

const ProjectTile = ({ url, title, about }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  const tileClass = classNames({
    [styles.tile_main]: !showMoreInfo,
    [styles.tile_info]: showMoreInfo,
  })

  return (
    <div
      className={classNames(styles.tile, tileClass)}
      onMouseEnter={() => setShowMoreInfo(true)}
      onMouseLeave={() => setShowMoreInfo(false)}
    >
      {!showMoreInfo ? (
        <>
          <p className={styles.heading}>{title}</p>
        </>
      ) : (
          <>
            <p className={styles.project_info}>{about}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className={styles.link_button}>Visit</button>
            </a>
          </>
        )}
    </div>
  )
}

ProjectTile.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string,
}

export default ProjectTile
