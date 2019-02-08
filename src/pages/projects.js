import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'


const Projects = () => (
  <>
    <Layout>
      <SEO title="Projects" />

      <Project url="https://capricornrecords.com.au/" title="Capricorn Records" />
      <Project url="https://techwhen.com/" title="TechWhen" />
    </Layout>
  </>
)

export default Projects
