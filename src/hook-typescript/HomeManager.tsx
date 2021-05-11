import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
import HookGetBlog from "./provider/hookGetBlog"
import { HomeContext } from "./provider/HomeContext"
import React, { Dispatch, useState } from "react"

// export interface FetchedData {
// 	list: Data
// 	id: number
// }
export interface Data {
	name: string
	email: string
	body: string
	id: number
}

const HomeManager = () => {
	const [blogLists, setBlogLists]:[Data, Dispatch<any>] = useState(null)
	return (
		<div className="Home">
			<HomeContext.Provider value={{ blogLists, setBlogLists }}>
				<HomeLogic>
					{(title: string) => <Title>{title}</Title>}

					{(fetchParams) => <HookGetBlog params={fetchParams} />}

					{(fetchedData: Data, toggleContent: object) => (
						<List key={fetchedData.id}>
							{toggleContent}
							{fetchedData}
						</List>
					)}
				</HomeLogic>
			</HomeContext.Provider>
		</div>
	)
}
export default HomeManager
