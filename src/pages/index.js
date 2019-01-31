import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'

const MainLayout = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  background-color: #f7f8f8;
`

const MainContent = styled.div`
  text-align: center;
`

const BigTitle = styled.h1`
  color: #333a44;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
`

const LittleTitle = styled.h2`
  color: #333a44;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
`

const Line = styled.hr`
  max-width: 800px;
  width: 100%;
  border-top: 1px solid #8de3db;

  &:after {
    content: ' ';
    height: 8px;
    position: relative;
    bottom: 4px;
    left: calc(50% - 4px);
    width: 8px;
    background: #8de3db;
    transform: rotate(45deg);
    display: block;
  }
`

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" keywords={[`Chloe Kuypers`, `development`]} />
    <MainContent>
      <BigTitle>Chloe Kuypers</BigTitle>
      <Line />
      <LittleTitle>Web developer</LittleTitle>
    </MainContent>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </MainLayout>
)

export default IndexPage
