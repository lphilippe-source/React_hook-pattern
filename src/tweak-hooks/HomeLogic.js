import { useState, useMemo, useContext, useRef, useCallback, ReactNode } from 'react'
// import {UserContext} from "../services/UserContext"
import { HomeContext } from './provider/HomeContext'
import React from 'react'



const HomeLogic = React.memo(({ children }) => {

    const title = useRef("all blogs!")
    const url = 'https://jsonplaceholder.typicode.com/comments'
    // const deleteUrl = "https://localhost:8000/blog/delete"

    // let {token} = useContext(UserContext)
    const { blogLists } = useContext(HomeContext)
    const bl = useMemo(() => blogLists, [blogLists])
    const [returnTitle, returnHookGetBlog, returnList, returnDetail] = children
    // console.log(children)
    // const returnH = useMemo(() =>returnHookGetBlog,[blogLists])
    const [content, setContent] = useState('')
    const [showContent, setShowContent] = useState(false)
    // const [deleteButton,setDeleteButton] = useState(false)
    // const [deleteBlogId,setDeleteBlogId] = useState('')
    // const [isTokenOk,setIsTokenOk] = useState(false)
    // const [promiseOptions,setPromiseOptions] = useState(false)
    console.log('rerender global component')

    const toggleContent = useCallback(customEvent => {
        console.log('toggleContent')
        setShowContent(!showContent)
        setContent(customEvent)
    }, [setShowContent, setContent, showContent])

    const mapList = useMemo(() =>
        bl && bl.map(
            (list) => {
                return returnList(list, toggleContent)
            }
        ), [bl, toggleContent, returnList])


    const detailOrList = useCallback(() => {
        return showContent ? returnDetail(content, toggleContent) : mapList
    }, [mapList, toggleContent]
    )
    const returnT = useCallback(() => returnTitle(title.current), [returnTitle])
    return (
        <>
            {/* {returnTitle(title.current)} */}
            {returnT()}
            { returnHookGetBlog([url, null])}
            {detailOrList()}
            {/* {mapList&&mapList} */}
            {/* {deleteButton ? returnHookDelete([deleteUrl,options]) : detailOrList()} */}
        </>
    )
})

export default HomeLogic;