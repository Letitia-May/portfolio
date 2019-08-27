import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './projectTile.module.scss'

const ProjectTile = ({ url, title, about }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false)

  let showInfoTile = () => {
    setShowMoreInfo(true)
  }

  let showMainTile = () => {
    setShowMoreInfo(false)
  }

  const tileClass = classNames({
    [styles.tile_main]: !showMoreInfo,
    [styles.tile_info]: showMoreInfo
  });

  return (
    <div className={classNames(styles.tile, tileClass)}>
      {!showMoreInfo ? (
        <>
          <a className={styles.info_link} onClick={showInfoTile}>
            more info
          </a>
          <p className={styles.heading}>{title}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>Visit</button>
          </a>
        </>
      ) : (
          <>
            <p className={styles.project_info}>{about}</p>
            <button className={styles.back_button} onClick={showMainTile}>
              Back
          </button>
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
