import React, {useState, useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
// import './CRAD.css'

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
        // const payload = {
        //     method: 'post',
        //     data
        // }
        // setPayload(payload);
        const payload = {
            method: 'post',
            data: data[count]
        }
        setPayload(payload);
        setCount(count+1)

    }

    if (isLoading) { return <p>Loading...</p>}
    if (isError) return (<p>We have an error</p>)

        // const renderItems = response ? response.data.map(
        //     (item, index) => {
        //         return (
        //             <div key={index} className='item'>
        //                 <span onClick = {selectItem}>{item.title}</span>
        //                 <button type="button"
        //                 // className="btn btn-outline-success btn-sm float-right"
        //                 // onClick={onToggleImportant}
        //                 >Delete</button>

        //                 <button type="button"
        //                 // className="btn btn-outline-danger btn-sm float-right"
        //                 // onClick={onDelete}
        //                 >Edit</button>
        //             </div>
        //         )
        //     }
        // ) : null

    return (

        <div className='CRAD'>
            <button onClick={makeDatabase}>Make DataBase in Firebase</button>
            <button onClick={appendItem}>Make item </button>
            {/* {renderItems} */}
        </div>
    )
}

export default CRAD