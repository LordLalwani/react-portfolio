import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'
import { ButtonStyleTwo } from 'Common'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		{/* <ButtonStyleTwo as={AnchorLink}> Download CV </ButtonStyleTwo> */}
		<AnchorLink href="#about">About</AnchorLink>
		<AnchorLink href="#projects">Projects</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
	</Wrapper>
)

export default NavbarLinks