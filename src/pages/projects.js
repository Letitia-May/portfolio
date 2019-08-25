import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ProjectTile from '../components/projectTile/projectTile'

const Projects = () => (
  <>
    <Layout>
      <SEO title="Projects" />

      <ProjectTile
        url="https://capricornrecords.com.au/"
        title="Capricorn Records"
        about="An independent e-commerce store selling used vinyls, built using Shopify's CMS."
      />
      <ProjectTile
        url="https://techwhen.com/"
        title="TechWhen"
        about="A learning project that uses React, Docker, AWS, Material Design. When complete, it will list upcoming tech conferences."
      />
    </Layout>
  </>
)

export default Projects
