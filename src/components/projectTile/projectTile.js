import PropTypes from 'prop-types'
import React from 'react'
import styles from './projectTile.module.scss'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.showInfoTile = this.showInfoTile.bind(this)
    this.showMainTile = this.showMainTile.bind(this)
    this.state = { isMoreInfoClicked: false }
  }

  showInfoTile() {
    this.setState({ isMoreInfoClicked: true })
  }

  showMainTile() {
    this.setState({ isMoreInfoClicked: false })
  }

  render() {
    const isMoreInfoClicked = this.state.isMoreInfoClicked
    let tile

    const MainTile = () => (
      <div className={styles.styled_main_tile}>
        <a className={styles.info_link} onClick={this.showInfoTile}>more info</a>
        <p className={styles.heading}>{this.props.title}</p>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Visit</button>
        </a>
      </div >
    )

    const InfoTile = () => (
      <div className={styles.styled_info_tile}>
        <p className={styles.project_info}>{this.props.about}</p>
        <button className={styles.back_button} onClick={this.showMainTile}>Back</button>
      </div>
    )

    if (isMoreInfoClicked) {
      tile = <InfoTile />
    } else {
      tile = <MainTile />
    }

    return <div className={styles.container}>{tile}</div>
  }
}

Project.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string,
}

export default Project
