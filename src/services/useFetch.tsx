import { Dispatch, useEffect, useState } from 'react'
import { Data } from '../hook-typescript/HomeManager'

export const useFetch = (url, options) => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(true)
    const [lists, setLists]:[Data, Dispatch<any>] = useState(null)
    console.log('useFetch')
    const setValue = (res:Data) => {
        setLists(res)
        setPending(false)
        setError(null)
    }

    useEffect(() => {
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw Error("impossible d'atteindre le serveur")
                }
                return res.json()
            })
            .then((res:Data) => {
                    setValue(res)
            })
        .catch(error => {
            setError(error.message)
            setPending(false)
        })
    }, [url, options])

    return { error, isPending, lists }

}