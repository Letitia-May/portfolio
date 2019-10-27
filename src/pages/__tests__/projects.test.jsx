import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Projects from '../projects'

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Chloe Kuypers`,
          description: `My portfolio, built with Gatsby`,
          author: `@letitia-may`,
        },
      },
    })
  )
})

describe('Projects', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Projects />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
