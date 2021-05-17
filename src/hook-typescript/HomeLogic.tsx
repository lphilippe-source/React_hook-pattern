import { useState, useMemo, useContext, useRef, useCallback, Fragment } from "react"
import { HomeContext } from "./provider/HomeContext"
import { Data } from "./HomeManager"

type Props = [
	returnTitle?: (title: string) => JSX.Element,
	returnHooksGetBlog?: (...p) => JSX.Element,
	returnList?: (list: Data, toggleContent: object) => JSX.Element,
	returnDetail?: (content, toggleContent) => JSX.Element
]
type Child = {
	children: Props
}
const functionsSet = new Set()

const HomeLogic = ({ children }: Child) => {
	const titleRef = useRef("all blogs!")
	const url = "https://jsonplaceholder.typicode.com/comments"

	const { blogLists }: { blogLists: Data[] } = useContext(HomeContext)
	const bl = useMemo(() => blogLists, [blogLists])
	const [returnTitle, returnHookGetBlog, returnList, returnDetail]: Props = children

	const [content, setContent] = useState("")
	const [showContent, setShowContent] = useState(false)
	console.log("rerender global component")

	const toggleContent = useCallback((customEvent) => {
		setContent(customEvent)
		setShowContent((s) => !s)
	}, [])

	const mapList = useMemo(
		() =>
			bl &&
			bl.map((list: Data) => {
				return returnList(list, toggleContent)
			}),
		[bl, toggleContent, returnList]
	)

	const returnD = () => {
		return returnDetail(content, toggleContent)
	}

	const detailOrList = () => {
		return showContent ? returnD() : mapList
	}

	functionsSet.add(returnD)
	console.log(functionsSet)

	const returnT = useCallback(() => returnTitle(titleRef.current), [returnTitle])

	return (
		<Fragment>
			{/* {returnTitle(title.current)} */}
			{returnT()}
			{returnHookGetBlog([url, null])}
			{detailOrList()}
			{/* {mapList && mapList} */}
			{/* {deleteButton ? returnHookDelete([deleteUrl,options]) : detailOrList()} */}
		</Fragment>
	)
}

export default HomeLogic
