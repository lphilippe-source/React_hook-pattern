import { useEffect, useState } from 'react'

export const useFetch = (url, options) => {
    const [error, setError] = useState(null)
    const [isPending, setPending] = useState(true)
    const [lists, setLists] = useState(null)
    console.log('useFetch')
    const setValue = (res) => {
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
            .then((res) => {
                    setValue(res)
            })
        .catch(error => {
            setError(error.message)
            setPending(false)
        })
    }, [url, options])

    return { error, isPending, lists }

}