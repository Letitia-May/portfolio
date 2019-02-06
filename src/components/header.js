import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  padding: 1.5rem;

  @media (max-width: 700px) {
    text-align: center;
  }
`

const InnerContainer = styled.div`
  border: 1px solid var(--pink);
  display: inline-block;
  padding: 1rem;
  transition: all 0.35s ease-in-out;
  text-align: center;

  &:hover {
    border: 1px solid var(--teal);
  }
`

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--dark-grey);
`

const SubTitle = styled.h2`
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--light-grey);
`

const Header = ({ siteTitle }) => (
  <OuterContainer>
    <InnerContainer>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <MainTitle>{siteTitle}</MainTitle>
        <SubTitle>Web developer</SubTitle>
      </Link>
    </InnerContainer>
  </OuterContainer>
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
