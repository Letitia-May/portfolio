import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import GlobalStyle from '../styles/global'
import '../styles/normalize.css'

const MainLayout = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  background-color: var(--white);
`

const MainContent = styled.div`
  text-align: center;
`

const BigTitle = styled.h1`
  font-size: 3rem;
  text-indent: 0.5rem;
  text-transform: uppercase;
`

const LittleTitle = styled.h2`
  font-size: 1.5rem;
  text-indent: 0.5rem;
  text-transform: uppercase;
`

const Line = styled.hr`
  max-width: 800px;
  width: 100%;
  border-top: 1px solid var(--pink);
  background: var(--pink);

  &:after {
    content: ' ';
    height: 8px;
    position: relative;
    bottom: 4px;
    left: calc(50% - 4px);
    width: 8px;
    background: var(--pink);
    transform: rotate(45deg);
    display: block;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <MainLayout>
      <SEO title="Home" keywords={[`Chloe Kuypers`, `development`]} />
      <MainContent>
        <BigTitle>Chloe Kuypers</BigTitle>
        <Line />
        <LittleTitle>Web developer</LittleTitle>
      </MainContent>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </MainLayout>
  </>
)

export default IndexPage
