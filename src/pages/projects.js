import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

const Projects = () => (
  <>
    <Layout>
      <SEO title="Projects" />

      <Project
        url="https://capricornrecords.com.au/"
        title="Capricorn Records"
        about="Built using Shopify CMS with custom media queries... add some more here"
      />
      <Project
        url="https://techwhen.com/"
        title="TechWhen"
        about="Work in progress - working on this project with another dev to practive React skills, and learn more about Docker, AWS, Material Design"
      />
    </Layout>
  </>
)

export default Projects
