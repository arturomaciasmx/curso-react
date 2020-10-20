import { useState, useEffect } from 'react'

const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()

                setData(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchExercises()
    }, [url])

    return { data, loading, error }
}

export default useFetch