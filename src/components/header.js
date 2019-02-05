import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  background: var(--pink);
  margin-bottom: 1.45rem;
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const MainTitle = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
`

const SubTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
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
