import {useState, useEffect} from 'react';
import axios from 'axios';


const useFetch = () => {
    const baseAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA';
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState(null)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    
    const doFetch = options => {
        setIsLoading(true)
        setOptions(options)
    }

    useEffect(() => {
        if (!isLoading) return
        console.log('in useEffect', options);
        
        axios.post(baseAPI, options)
            .then(response => {
                setResponse(response)
                setIsLoading(false)
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            })
    },[isLoading])

    return [{response, error, isLoading}, doFetch]
}

export default useFetch

