import React from "react"

// usefull for pure Component
// brainf*%@ spotted
// hard typing it as props using memo
// better as children
const Title = React.memo(({ children }) => {
	console.log("rerender Title")
	console.log(children)
	return <h2> {children}</h2>
})

export default Title
