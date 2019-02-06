import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  box-sizing: border-box;
  border: 1px solid var(--pink);
  transition: border-width 150ms ease-in-out;
  background-color: var(--dark-grey);
  padding: 0.75rem 0.55rem 0.65rem 0.75rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.25rem;
  color: var(--white);
  font-family: 'Raleway', sans-serif;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: var(--teal);
    border: 1px solid var(--white);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ text }) => <Container>{text}</Container>

Button.propTypes = {
  url: PropTypes.string,
}

export default Button
