import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Project = styled.div`
  width: 700px;
  background-color: var(--teal);
  padding: 2rem 1rem;
  text-align: center;
  margin: 2rem 0;
  color: var(--white);

  @media (max-width: 800px) {
    width: 80vw;
  }
`

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 800;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`

// const AboutLink = styled.a`
//   color: var(--white);
//   text-decoration: underline;
// `;

const Button = styled.button`
  border: 1px solid var(--white);
  background-color: var(--teal);
  color: var(--white);

  &:hover {
    background-color: var(--pink);
  }
`

const Projects = () => (
  <>
    <Layout>
      <SEO title="Projects" />
      <Project>
        {/* <AboutLink>more info</AboutLink> */}
        <Title>Capricorn Records</Title>
        <a
          href="https://capricornrecords.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Visit</Button>
        </a>
      </Project>

      <Project>
        {/* <AboutLink>more info</AboutLink> */}
        <Title>TechWhen</Title>
        <a
          href="https://techwhen.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Visit</Button>
        </a>
      </Project>
    </Layout>
  </>
)

export default Projects
