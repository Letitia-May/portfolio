import React from 'react'
import { render } from '@testing-library/react'
import Header from './header'

describe(Header, () => {
  test('renders the Header with name and job title', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Chloe')).toBeInTheDocument()
    expect(getByText('Web dev')).toBeInTheDocument()
  })
})
