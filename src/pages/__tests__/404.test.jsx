import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import NotFoundPage from '../404'

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

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
