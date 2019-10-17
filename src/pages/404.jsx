import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
    <p>Try visiting the <Link to="/"
      style={{ color: `var(--primary)` }}>home page
      </Link> or checking out my <Link to="/projects/"
        style={{ color: `var(--primary)` }}>projects</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
