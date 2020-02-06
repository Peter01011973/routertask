import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url, payload) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);    

    useEffect(() => {
        const fetchData = async () => {
               
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
    }, [payload, url]);
    return [{ response, isLoading, isError }];
};
export default useFetch
