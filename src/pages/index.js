import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
// import { Link } from 'gatsby'

import SEO from '../components/seo'
import Icon from '../components/icon'
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
  background-color: var(--dark-grey);
`

const MainContent = styled.div`
  text-align: center;
`

const BigTitle = styled.h1`
  font-size: 3rem;
  text-indent: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`

const LittleTitle = styled.h2`
  font-size: 1.5rem;
  text-indent: 0.5rem;
  text-transform: uppercase;
  margin: 1.5rem 0;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`

const Line = styled.hr`
  width: 100%;
  max-width: 800px;
  border: 0.5px solid var(--pink);
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
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
    </Helmet>
    <GlobalStyle />
    <MainLayout>
      <SEO title="Home" keywords={[`Chloe Kuypers`, `development`]} />
      <MainContent>
        <BigTitle>Chloe Kuypers</BigTitle>
        <Line />
        <LittleTitle>Web developer</LittleTitle>
        <Icon type="github" url="https://github.com/Letitia-May"/>
        <Icon type="linkedin-in" url="https://au.linkedin.com/in/ckuypers"/>
        <Icon type="twitter" url="https://twitter.com/letitia_may"/>
      </MainContent>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </MainLayout>
  </>
)

export default IndexPage
