import HomeManager from "../hook-typescript/HomeManager"
import Reducer from "../UseReducer"
import { Button, Col, Grid, Row } from "./css/styles"
import Callback from "../UseCallback"
const App = () => {
	return (
		<div>
			<Button>coucou</Button>
			<Grid>
				<Row>
					<Col size={1}>
						<Reducer />
					</Col>
					<Col size={3}>
						<HomeManager />
					</Col>
				</Row>
				<Row>
					<Col>
						<Callback />
					</Col>
				</Row>
			</Grid>
		</div>
	)
}

export default App
