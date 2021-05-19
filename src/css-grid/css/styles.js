import styled from "@emotion/styled"

export const Button = styled.button`
	border: 1px solid green;
	color: turquoise;
`
export const Grid = styled.div`
	border: 4px solid black;
`
export const Row = styled.div`
	display: flex;
	border: 2px solid blue;
`
export const Col = styled.div`
	flex: ${(props) => props.size};
	border: 2px solid red;
`
