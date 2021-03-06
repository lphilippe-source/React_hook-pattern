import React, { useEffect, useRef } from "react"
import { Data } from "../HomeManager"
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { card1 } from "./css/styles"

type Props = [content: Data, toggleContent: (list: Data) => Data]
type Child = {
	children: Props
}
const Detail = React.memo(({ children }: Child) => {
	console.log("rerender Details")
	const [content, toggleContent]: Props = children
	console.log(content)
	const count = useRef(0)
	useEffect(() => {
		if (count.current === 0) {
			count.current += 1
			return console.log("first render count = 0")
		}
	})
	return (
		<a css={card1} href="#">
			<h2>{content.name}</h2>
			<div>{content.body}</div>
			<button onClick={() => toggleContent(content)}>fermer</button>
		</a>
	)
})

export default Detail
