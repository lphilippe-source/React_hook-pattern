import React, { useRef } from "react"
import { Data } from "../HomeManager"
import { card1, goArrow, goCorner, p } from "./css/styles"
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
type Props = [toggleContent: (list: Data) => void, list: Data]
type Child = {
	children: Props
}

const truncate = (str) => {
	let name = str.split("@")
	return name[0]
}
const List: React.FC<Child> = ({ children }: Child) => {
	const [toggleContent, list]: Props = children
	const listRef = useRef(list)
	console.log("rerender List")
	return (
		<div onClick={() => toggleContent(list)}>
			<a css={card1} href="#">
				<h2 className="h2">
					<em>Written by: </em>
					{truncate(listRef.current.email)}
				</h2>
				<p css={p} className="p small">
					{listRef.current.name}
				</p>
				<div css={goCorner} className="go-corner">
					<div css={goArrow} className="go-arrow">
						→
					</div>
				</div>
			</a>
		</div>
	)
}

export default React.memo(List)
