/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react"

const card1 = css`
	display: block;
	position: relative;
	max-width: 200px;
	background-color: #f2f8f9;
	border-radius: 4px;
	padding: 32px 24px;
	margin: 12px;
	text-decoration: none;
	z-index: 0;
	overflow: hidden;

	&:before {
		content: "";
		position: absolute;
		z-index: -1;
		top: -16px;
		right: -16px;
		background: #00838d;
		height: 32px;
		width: 32px;
		border-radius: 32px;
		transform: scale(1);
		transform-origin: 50% 50%;
		transition: transform 0.25s ease-out;
	}

	&:hover:before {
		transform: scale(21);
	}
	&:hover {
		.p {
			transition: all 0.3s ease-out;
			color: rgba(255, 255, 255, 0.8);
		}
		.h2 {
			transition: all 0.3s ease-out;
			color: #ffffff;
		}
	}
`
const p = css`
	font-size: 17px;
	font-weight: 400;
	line-height: 20px;
	color: #666666;

	&.small {
		font-size: 14px;
	}
`
const goCorner = css`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 32px;
	height: 32px;
	overflow: hidden;
	top: 0;
	right: 0;
	background-color: #00838d;
	border-radius: 0 4px 0 32px;
`
const goArrow = css`
	margin-top: -4px;
	margin-right: -4px;
	color: white;
	font-family: courier, sans;
`
const container = css`
	width: 50%;
	height: auto;
	display: flex;
	// flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
const container2 = css`
	width: 100%;
	height: auto;
	display: flex;
	// flex-wrap: wrap;
	// align-items: center;
	// justify-content: center;
	// flex-direction: column;
`
const userList = css`
	width: 50% !important;
	color: black;
	background-color: #dfdfdf;
`

export { card1, container2, container, p, goArrow, goCorner, userList }
