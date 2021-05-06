import React, { useState, useCallback } from "react"

const functionsSet = new Set()

export const App = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const increment = useCallback(() => {

        setCount(c => c + 1)
    }, [setCount])

//cache the function instance between renders

    const decrement = useCallback(() => {
        setCount(c => c - 1)
    }, [setCount])

    const incrementOtherCounter = useCallback(() => {
        setCount2(c => c + 1)
    }, [setCount2])


    functionsSet.add(increment)
    functionsSet.add(decrement)
    functionsSet.add(incrementOtherCounter)

    console.log(functionsSet)
    console.log('rendered')
    console.log(functionsSet.size)
    return (
        <>
            Count: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
        </>
    )
}