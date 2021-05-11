import List from "./views/List";
import Title from "./views/Title";
import HomeLogic from "./HomeLogic";
import Detail from "./views/Detail";
import HookGetBlog from "./provider/hookGetBlog";
import { HomeContext } from "./provider/HomeContext";
import React, { useState } from "react";

// export type PropsTitle = [
//     title:string
// ]
type ToggleContent = [onClick: object];
type FetchedData = [list: Data];
type Data = [id: number];

const HomeManager = React.memo(() => {
  const [blogLists, setBlogLists] = useState(null);
  return (
    <div className="Home">
      <HomeContext.Provider value={{ blogLists, setBlogLists }}>
        <HomeLogic>
          {(title: string) => <Title>{title}</Title>}
          {(fetchParams) => <HookGetBlog params={fetchParams} />}
          {/* {(fetchedData:FetchedData, toggleContent:ToggleContent) =>
                        <List
                            {...toggleContent}
                            {...fetchedData}
                            />
                    } */}
        </HomeLogic>
      </HomeContext.Provider>
    </div>
  );
});
export default HomeManager;
