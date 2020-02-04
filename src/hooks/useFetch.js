import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, payload) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);    

    useEffect(() => {

        const fetchData = async () => {
            console.log('fetching')
               
            setIsLoading(true);
            setIsError(false);    
            try {
                const response = await axios(url, payload);
                setResponse(response);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        if (payload) fetchData();       

    }, [payload]);
    return [{ response, isLoading, isError }];
};

export default useFetch



// const useFetch = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [options, setOptions] = useState(null)
//     const [response, setResponse] = useState(null)
//     const [error, setError] = useState(null)
//     const [authTypeIsSignIn, setAuthTypeIsSignIn] = useState(true)

//     const baseAPI = authTypeIsSignIn  
//     ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA'
//     : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA';

    
//     const doFetch = (options, signType) => {
//         setIsLoading(true)
//         setOptions(options)
//         signType === 'signIn' ? setAuthTypeIsSignIn(true) : setAuthTypeIsSignIn(false)
//     }

//     useEffect(() => {
//         if (!isLoading) return
//         setError(null)
//         axios.post(baseAPI, options)
//             .then(response => {
//                 setResponse(response)
//                 setIsLoading(false)
//             })
//             .catch(error => {
//                 setError(error)
//                 setIsLoading(false)
//             })
//     },[isLoading])

//     return [{response, error, isLoading}, doFetch]
// }
// export default useFetch

