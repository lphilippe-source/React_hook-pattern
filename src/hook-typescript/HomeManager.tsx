import List from "./views/List"
import Title from "./views/Title"
import HomeLogic from "./HomeLogic"
import Detail from "./views/Detail"
import HookGetBlog from "./provider/hookGetBlog"
import BlogProvider from "./provider/HomeContext"

export interface Data {
	name: string
	email: string
	body: string
	id: number
}

const HomeManager = () => {
	return (
		<div className="Home">
			<BlogProvider>
				<HomeLogic>
					{(title: string) => <Title>{title}</Title>}

					{(fetchParams) => <HookGetBlog params={fetchParams} />}

					{(fetchedData: Data, toggleContent: object) => (
						<List key={fetchedData.id}>
							{toggleContent}
							{fetchedData}
						</List>
					)}
					{(content: Data, toggleContent) => (
						<Detail>
							{content}
							{toggleContent}
						</Detail>
					)}
				</HomeLogic>
			</BlogProvider>
		</div>
	)
}
export default HomeManager
