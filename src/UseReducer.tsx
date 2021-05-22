import { useReducer } from "react"

const Reducer = () => {
	console.log("rerender reducer")
	const reducer = (state, action) => {
		switch (action.type) {
			case "up":
				// console.log(state.count)
				return { ...state, count: state.count + 1, count2: state.count2 + 2 }
			case "down":
				return { ...state, count: state.count - 1 }
			default:
				throw new Error("hin hin, pas bon ça ...")
		}
	}
	const [toggleButton, dispatch] = useReducer(reducer, {
		count: 10,
		count2: 20,
	})
	return (
		<>
			<p>{toggleButton.count}</p>
			<p>{toggleButton.count2}</p>

			<button onClick={() => dispatch({ type: "up" })}>+</button>
			<button onClick={() => dispatch({ type: "down" })}>-</button>
		</>
	)
}

export default Reducer
