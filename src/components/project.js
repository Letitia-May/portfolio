import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 700px;
  background-color: var(--teal);
  padding: 2rem 1rem;
  text-align: center;
  margin: 2rem 0;
  color: var(--white);

  @media (max-width: 800px) {
    width: 80vw;
  }
`

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: 800;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`

// const Info = styled.a`
//   color: var(--white);
//   text-decoration: underline;
//   font-size: 0.75rem;
// `;

const Button = styled.button`
  border: 1px solid var(--white);
  background-color: var(--teal);
  color: var(--white);

  &:hover {
    background-color: var(--pink);
  }
`

const Project = ({ url, title }) => (
	<Container>
		{/* <Info>more info</Info> */}
		<Title>{ title }</Title>
		<a
			href={ url }
			target="_blank"
			rel="noopener noreferrer"
		>
			<Button>Visit</Button>
		</a>
	</Container>
)

Project.propTypes = {
  url: PropTypes.string,
}

export default Project
