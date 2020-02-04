import React, {useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const AddItem = () => {
    const [payload, setPayload] = useState(null);
    const [baseAPI] = useState('https://jsonplaceholder.typicode.com/posts');
    const [{ response, isLoading, isError }] = useFetch(baseAPI, payload);

    const data = {
        title: useRef(null),
        body: useRef(null),
        userId: useRef(1)
    } 

    const submitHandler = (event) => {
        event.preventDefault();
        
        setPayload({
            method: 'post',
            data : {
                title: data.title.current.value, 
                body: data.body.current.value, 
                userId: data.userId.current.value
            }
        })
    }

    if (isLoading) return <p>Loading...</p> 
    if (isError) return (<p>We have an error</p>)
    
    const renderRez = response 
        ? (<div>
            <h1>Title: {response.data.title}</h1>
            <h1>Body: {response.data.body}</h1>
            <h1>UserId: {response.data.userId}</h1>
        </div>) : null      

    return (
        <div>
        <form onSubmit={submitHandler}>
            <label>Title:
                <input type='text' ref={data.title} />
            </label>
            <label>Body:
                <input type='text' ref={data.body} />
            </label>
            <label>UserId:
                <input type='number' ref={data.userId} />
            </label>
            <button type='submit'>Submit</button>
        </form>
        {renderRez}
        </div>
    )
}

export default AddItem
