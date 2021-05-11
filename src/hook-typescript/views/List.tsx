import React from "react"
import { Data } from "../HomeManager"

type Props = [toggleContent: object, list: Data]
type Child = {
	children: Props
}
const List: React.FC = React.memo(({ children }: Child) => {
	const [toggleContent, list]: Props = children

	console.log("rerender List")
	return (
		<div onClick={() => toggleContent} className="blog-preview">
			<h2>{list.name}</h2>
			<p>Written by {list.body}</p>
		</div>
	)
})

export default List
