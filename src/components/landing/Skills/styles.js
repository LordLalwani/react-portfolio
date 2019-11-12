import styled from 'styled-components'

export const Wrapper = styled.div`
	background-image: url('../illustrations/details.svg');
	background-size: contain;
	background-position: left top;
	background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
	padding: 10rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-left: 2rem;

	@media (max-width: 960px) {
		padding-left: unset;
		width: 100%;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
`
export const Content = styled.div`
	padding: 0rem 0rem;
	h5 {
		text-align: center;
		color: #Black;
		display: block;
		font-size: 0.83em;
		margin-block-start: 0.5em;
		margin-block-end: 0.5em;
		margin-inline-start: 0%;
		margin-inline-end: 0%;
		font-weight: bold;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
	border-radius: 5px;
	  
	:hover {
		color: white;
		div {
			background-color: #1818f6;
		}
	  }

	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 10fr;
	gap: 0.8rem 0.8rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`
