import React from 'react'
import renderer from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Index from '../index'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
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

describe('Index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
