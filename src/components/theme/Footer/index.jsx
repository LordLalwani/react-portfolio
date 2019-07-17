import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'
import gatsbyIcon from '../../../../static/icons/gatsby.svg'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Deep Lalwani</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Made with{' '}
					<span>
						{' '}
						<img
							style={{ marginBottom: 0 }}
							width="24"
							src={gatsbyIcon}
							alt={"Gatsby.js"}
						/>{' '}
					</span>
					<p style={{ display: 'inline-block' }}>By Deep Lalwani</p>
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)