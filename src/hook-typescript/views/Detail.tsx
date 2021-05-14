import React from "react"
import { Data } from "../HomeManager"
type Props = [content: Data, toggleContent: (list: Data) => Data]
type Child = {
	children: Props
}
const card: object = {
	display: "block",
	position: "relative" as "relative",
	maxWidth: "262px",
	backgroundColor: "#f2f8f9",
	borderRadius: "4px",
	padding: "32px 24px",
	margin: "12px",
	textDecoration: "none",
	zIndex: 0,
	overflow: "hidden",
}
const Detail = React.memo(({ children }: Child) => {
	console.log("rerender Details")
	const [content, toggleContent]: Props = children
	return (
		<a style={card} href="#">
			<h2>{content.name}</h2>
			<div>{content.body}</div>
			<button onClick={() => toggleContent(content)}>fermer</button>
		</a>
	)
})

export default Detail
