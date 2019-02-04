import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  flex: 1;
  padding: 1rem 1rem 0;
  color: var(--teal);
  font-size: 2rem;
  transition: all 0.35s ease-in-out;

  &:hover,
  &:active {
    color: var(--pink);
  }
`

const Icon = ({ url, type }) => (
  <Container href={url} target="_blank">
    <i className={'fab fa-' + type} />
  </Container>
)

Icon.propTypes = {
  url: PropTypes.string,
}

export default Icon
