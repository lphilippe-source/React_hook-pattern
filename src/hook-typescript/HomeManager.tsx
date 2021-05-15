import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
import HookGetBlog from "./provider/hookGetBlog"
import BlogProvider from "./provider/HomeContext"
import React from "react"
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react"
import { container, container2, userList } from "./views/css/styles"

export interface Data {
	name: string
	email: string
	body: string
	id: number
}

const HomeManager = () => {
	return (
		<div css={container2}>
			<div css={container}>
				<BlogProvider>
					<HomeLogic>
						{(title: string) => <Title>{title}</Title>}

						{(fetchParams) => <HookGetBlog params={fetchParams} />}

						{(fetchedData: Data, toggleContent: object) => (
							<List key={fetchedData.id}>
								{toggleContent}
								{fetchedData}
							</List>
						)}
						{(content: Data, toggleContent) => (
							<Detail>
								{content}
								{toggleContent}
							</Detail>
						)}
					</HomeLogic>
				</BlogProvider>
			</div>
			<div css={userList}>salut les gens!</div>
		</div>
	)
}
export default HomeManager
