import React from 'react'
import { render } from '@testing-library/react'
import Icon from './icon'

describe(Icon, () => {
  test('renders the Icon correctly', () => {
    const { container } = render(<Icon />)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          class="container"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i
            class="fab fa-undefined"
          />
        </a>
      </div>
    `)
  })
})
