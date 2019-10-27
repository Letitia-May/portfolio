import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ProjectTile from './projectTile'

describe(ProjectTile, () => {
  const url = 'www.some-url.com'
  const title = 'some title'
  const about = 'something about the project'
  const tech = 'something about the tech used'

  test('renders the ProjectTile with project title', () => {
    const { getByText, queryByText } = render(
      <ProjectTile url={url} title={title} about={about} tech={tech} />
    )

    expect(getByText(title)).toBeInTheDocument()
    expect(queryByText(about)).not.toBeInTheDocument()
    expect(queryByText(tech)).not.toBeInTheDocument()
  })

  test('renders the ProjectTile correctly when hovered', () => {
    const { getByText, queryByText } = render(
      <ProjectTile url={url} title={title} about={about} tech={tech} />
    )

    fireEvent.mouseEnter(getByText(title))

    expect(getByText(about)).toBeInTheDocument()
    expect(getByText(tech)).toBeInTheDocument()
    expect(getByText('Visit')).toBeInTheDocument()
    expect(queryByText(title)).not.toBeInTheDocument()
  })
})
