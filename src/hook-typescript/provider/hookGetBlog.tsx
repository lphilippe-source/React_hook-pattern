import { useFetch } from "../../services/useFetch"
import { useContext, useEffect } from "react"
import { HomeContext } from "./HomeContext"
import { Data } from "../HomeManager"

const HookGetBlog = ({ params }) => {
	console.log("refetchList")
	const [blogUrl, options] = params
	const { error, isPending, lists }: { error: string; isPending: boolean; lists: Data[] } =
		useFetch(blogUrl, options)
	const { setBlogLists } = useContext(HomeContext)
	useEffect(() => {
		if (!lists && !error) return console.log("nodatayet")
		setBlogLists(lists)
	}, [lists, setBlogLists, error])

	return <div> {isPending && "coucou:) ça charge!"}</div>
}

export default HookGetBlog
