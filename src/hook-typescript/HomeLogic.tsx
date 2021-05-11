import { useState, useMemo, useContext, useRef, useCallback, PropsWithChildren  } from 'react'
// import {UserContext} from "../services/UserContext"
import { HomeContext } from './provider/HomeContext'
import React from 'react'
// import { PropsTitle } from './HomeManager'

type Props = [
    returnTitle?: (title:string)=>PropsWithChildren<object>,
    returnHooksGetBlog?:(...p)=> JSX.Element,
    // returnList?: (...p)=>ReactNode,
    // returnDetail?: (...p)=>ReactNode
  ]
  type Child = {
      children:Props
  }

const HomeLogic = React.memo(( {children} :Child) => {
console.log(children)
    const titleRef = useRef("all blogs!")
    const url = 'https://jsonplaceholder.typicode.com/comments'

    const { blogLists } = useContext(HomeContext)
    const bl = useMemo(() => blogLists, [blogLists])
    const [returnTitle, returnHookGetBlog  ]:Props = [...children]

    const [content, setContent] = useState('')
    const [showContent, setShowContent] = useState(false)
    console.log('rerender global component')

    const toggleContent = useCallback(customEvent => {
        console.log('toggleContent')
        setShowContent(!showContent)
        setContent(customEvent)
    }, [setShowContent, setContent, showContent])
    
    // const mapList = useMemo(() =>
    //     bl && bl.map(
    //         (list) => {
    //             return returnList([ list , toggleContent ])
    //         }
    //     ), [bl,toggleContent,returnList])


    // const detailOrList = useCallback(() => {
    //     return showContent ? returnDetail( [content],[toggleContent]) : mapList
    // }, [mapList,toggleContent]
    // )
    const returnT = useCallback(() => returnTitle(titleRef.current), [returnTitle])
    return (
        <>
            {/* {returnTitle(title.current)} */}
            {returnT()}
            { returnHookGetBlog([url, null])}
            {/* {detailOrList()} */}
            {/* {mapList&&mapList} */}
            {/* {deleteButton ? returnHookDelete([deleteUrl,options]) : detailOrList()} */}
        </>
    )
})

export default HomeLogic;