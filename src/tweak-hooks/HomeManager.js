import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
import HookGetBlog from "./provider/hookGetBlog"
import { HomeContext } from "./provider/HomeContext"
import React, { useState } from "react"


const HomeManager = React.memo(() => {
    const [blogLists, setBlogLists] = useState(null)
    return (
        <div className="Home">
            <HomeContext.Provider value={{ blogLists, setBlogLists }}>
                <HomeLogic>
                    {(title) => <Title title={title} />}
                    {(fetchParams) => <HookGetBlog params={fetchParams} />}
                    {(fetchedData, toggleContent) =>
                        <List
                            onClick = {toggleContent}
                            list = {fetchedData}
                            key={fetchedData.id} 
                            />
                    }

                    {(listContent, toggleContent) =>
                        <Detail
                           toggleContent = {toggleContent}
                            content={listContent} />
                    }
                </HomeLogic>
            </HomeContext.Provider>
        </div>
    )
})
export default HomeManager;