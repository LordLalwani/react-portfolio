import React from 'react'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<h3 to="/">Deep Lalwani</h3>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
