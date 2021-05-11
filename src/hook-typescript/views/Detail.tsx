import React from "react"
import { Data } from "../HomeManager"
type Props = [content: Data, toggleContent: (list: Data) => Data]
type Child = {
	children: Props
}
const Detail = React.memo(({ children }: Child) => {
	console.log("rerender Details")
	const [content, toggleContent]: Props = children
	return (
		<div className="blog-details">
			<h2>{content.name}</h2>
			<div>{content.body}</div>
			<button onClick={() => toggleContent(content)}>fermer</button>
		</div>
	)
})

export default Detail
