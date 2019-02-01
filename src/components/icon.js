import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
	flex: 1;
	padding: 1rem 0.75rem 0;
	color: var(--teal);
	font-size: 2rem;

	&:active {
		color: var(--light-grey);
	}

	/* &:hover {
		padding-top: 0;
		position: relative;
		-webkit-transition: padding-top 0.2s ease;
	} */
`

const Icon = ({ url, type}) => (
	<Container href={url} target="_blank">
		<i className={"fab fa-" + type}></i>
	</Container>
)

Icon.propTypes = {
  url: PropTypes.string,
}

export default Icon
