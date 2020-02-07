import React, {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const writeJsonFile = require('write-json-file');
const CRAD = () => {
    const [payload, setPayload] = useState(null);
    const [baseAPI, setbaseAPI] = useState('https://jsonplaceholder.typicode.com/posts'); 
    const [{response, isLoading, isError}] = useFetch(baseAPI, payload);
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(
        ()=> {
            const payload = {}
            setPayload(payload);
        }, []
      )

    const makeDatabase = () => {

        if (!isLoading) setData(response.data);
        
        // setbaseAPI('https://task-router.firebaseio.com/post.json');
        // const payload = {
        //     method: 'post',
        //     data
        // }
        // setPayload(payload);
        // axios.post('https://task-router.firebaseio.com/users.json',{user: 'gggg'})
    }

    const appendItem = () => {
        setbaseAPI('https://task-router.firebaseio.com/post.json');

        const payload = {
            method: 'post',
            data: data[count]
        }
        console.log('data', data[count]);
        const newArr = data.slice(0,12)
        
        const fileData = JSON.stringify(newArr);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'filename.json';
        link.href = url;
        link.click();
        setCount(count+1)

    }

    if (isLoading) { return <p>Loading...</p>}
    if (isError) return (<p>We have an error</p>)

    return (

        <div className='CRAD'>
            <button onClick={makeDatabase}>Make DataBase in Firebase</button>
            <button onClick={appendItem}>Make item </button>
            {/* {renderItems} */}
        </div>
    )
}

export default CRAD