import { createContext, Dispatch, useState } from "react"
import { Data } from "../HomeManager"

export const HomeContext = createContext(null)

const BlogProvider = ({children}) => {
	const [blogLists, setBlogLists]: [Data, Dispatch<any>] = useState(null)

	return <HomeContext.Provider value={{ blogLists, setBlogLists }} >
		{children}
		</HomeContext.Provider>
}

export default BlogProvider
