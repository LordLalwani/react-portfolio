import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, ButtonStyleTwo } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Deep Lalwani and I’m a Software engineer!</h4>
				<ButtonStyleTwo as={AnchorLink} href="#contact">
					Get In Touch
				</ButtonStyleTwo>
			</Details>
			<Thumbnail>
				<img src={dev} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
