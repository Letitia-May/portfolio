import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 700px;
  text-align: center;
  margin: 2rem 0;
  color: var(--white);

  @media (max-width: 800px) {
    width: 80vw;
  }
`

const StyledMainTile = styled.div`
  padding: 2rem 1rem;
  background-color: var(--teal);
`

const StyledInfoTile = styled.div`
  padding: 2rem 1rem;
  background-color: var(--light-grey);
`

const Heading = styled.p`
  font-size: 2.5rem;
  font-weight: 800;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`

const InfoLink = styled.a`
  color: var(--white);
  font-size: 0.75rem;
  border-bottom: 1px solid var(--white);
  transition: all 0.35s ease-in-out;

  &:hover {
    color: var(--dark-grey);
    cursor: pointer;
    font-weight: 600;
    border-bottom: 1px solid var(--dark-grey);
  }
`

const Button = styled.button`
  border: 1px solid var(--white);
  background-color: var(--teal);
  color: var(--white);

  &:hover {
    background-color: var(--pink);
  }
`

const BackButton = styled(Button)`
  background-color: var(--light-grey);

  &:hover {
    background-color: var(--teal);
  }
`

const ProjectInfo = styled.p`
  @media (max-width: 800px) {
    font-size: 0.75rem;
  }
`

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
      <StyledMainTile>
        <InfoLink onClick={this.showInfoTile}>more info</InfoLink>
        <Heading>{this.props.title}</Heading>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
          <Button>Visit</Button>
        </a>
      </StyledMainTile>
    )

    const InfoTile = () => (
      <StyledInfoTile>
        <ProjectInfo>{this.props.about}</ProjectInfo>
        <BackButton onClick={this.showMainTile}>Back</BackButton>
      </StyledInfoTile>
    )

    if (isMoreInfoClicked) {
      tile = <InfoTile />
    } else {
      tile = <MainTile />
    }

    return <Container>{tile}</Container>
  }
}

Project.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string,
}

export default Project
