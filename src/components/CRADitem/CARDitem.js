import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const CRADitem = () => {
    const {id} = useParams();
    const [payload, setPayload] = useState(null);
    // const [baseAPI, setbaseAPI] = useState('https://jsonplaceholder.typicode.com/posts');
    const [{ response, isLoading, isError }] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, payload);
    // const [data, setData] = useState(null);
    
    useEffect(
        () => {
            const payload = {}
            setPayload(payload);
        }, []
    )

    if (isLoading) return <p>Loading...</p> 
    if (isError) return (<p>We have an error</p>)
    
    const renderItem = response ? (
        <>
            <h3>ID: {response.data.id}</h3>
            <h3>Title: {response.data.title}</h3>
            <h3>Body: {response.data.body}</h3>
        </>
    ) : null
    
    return (
        <div>
            {renderItem}
        </div>
    )
}

export default CRADitem