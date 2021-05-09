import { useFetch } from '../../services/useFetch'
import { useContext, useEffect } from 'react'
import { HomeContext } from "./HomeContext"

const HookGetBlog = ({ params }) => {

    console.log('refetchList')
    const [blogUrl, options] = params
    const { error, isPending, lists } = useFetch(blogUrl, options)
    const { setBlogLists } = useContext(HomeContext)
    useEffect(() => {
        if (!lists) return console.log('nodatayet')
        setBlogLists(lists)
    }, [lists])

    return <div> {isPending && "coucou:) ça charge!"}</div>
}

export default HookGetBlog;