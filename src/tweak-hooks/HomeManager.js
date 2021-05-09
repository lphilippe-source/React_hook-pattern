import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
// import HookDelete from "./provider/hookDelete"
import HookGetBlog from "./provider/hookGetBlog"
import { HomeContext } from "./provider/HomeContext"
import { useState  } from "react"
import React from 'react'

const HomeManager = React.memo(() => {
    const [blogLists, setBlogLists] = useState(null)
    // const hookGetBlog = useMemo(() => , [blogLists])
    return (
        <div className="Home">
            <HomeContext.Provider value={{ blogLists, setBlogLists }}>
                <HomeLogic>
                    {(title) => <Title title={title} />}
                    {(fetchParams) => <HookGetBlog params={fetchParams} />}
                    {/* {(fetchParams)=><HookDelete params={fetchParams}/>} */}

                    {(fetchedData, toggleContent) =>
                        <List
                            // deleteButton={handleDelete}
                            onClick={toggleContent}
                            list={fetchedData}
                            key={fetchedData.id} />
                    }

                    {(listContent, toggleContent) =>
                        <Detail
                            toggleContent={toggleContent}
                            content={listContent} />}
                </HomeLogic>
            </HomeContext.Provider>
        </div>
    )
})
export default HomeManager;