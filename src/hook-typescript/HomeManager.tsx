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
import { blogContainer, globalContainer, userListContainer } from "./views/css/styles"

export interface Data {
	name: string
	email: string
	body: string
	id: number
}

const HomeManager = () => {
	return (
		<div css={globalContainer}>
			<div css={blogContainer}>
				<BlogProvider>
					<HomeLogic>
						{(title: string) => <Title>{title}</Title>}

						{(fetchParams) => <HookGetBlog params={fetchParams} />}

						{(fetchedData: Data, toggleContent: (list: Data) => void) => (
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
			<div css={userListContainer}>salut les gens!</div>
		</div>
	)
}
export default HomeManager
