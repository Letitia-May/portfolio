import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Project = styled.div`
  width: 700px;
  background-color: var(--teal);
  padding: 3rem 1rem;
  text-align: center;
  margin: 2rem 0;
  color: var(--white);
  font-size: 2rem;
  font-weight: 800;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: var(--light-grey);
    cursor: pointer;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Projects = () => (
  <>
    <Layout>
      <SEO title="Projects" />

      <a
        href="https://capricornrecords.com.au/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Project>Capricorn Records</Project>
      </a>
      <a href="https://techwhen.com/" target="_blank" rel="noopener noreferrer">
        <Project>TechWhen</Project>
      </a>
    </Layout>
  </>
)

export default Projects
