import { Button, Col, Grid, Row } from "./css/styles"

const App = () => {
	return (
		<div>
			<Button>coucou</Button>
			<Grid>
				<Row>
					<Col size={1}>long Column</Col>
					<Col size={3}> Big one</Col>
				</Row>
			</Grid>
		</div>
	)
}

export default App
