import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
	padding: 6rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: #212121;

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 32pt;
		font-weight: normal;
		color: #707070;
		line-height: normal;

		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	@media only screen and (min-device-width: 960px) {
		img {
			width: 70%;
			border-radius: 20px;
			margin-left: 30%;
		}
	}

	@media only screen and (min-device-width: 370px) and  (max-device-width: 960px) {
		img {
			width: 100%;
			border-radius: 20px;
			margin-left: 0%;
		}
	}

	@media (min-width: 380px) {
		width: 100%;
	}
`
