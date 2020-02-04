import React, {useState, useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
// import axios from 'axios';
import './CRAD1.css'

const CRAD = () => {
    const [payload, setPayload] = useState(null);
    const [count, setCount] = useState(0);
    const [baseAPI, setbaseAPI] = useState('https://task-router.firebaseio.com/post.json'); 
    const [{response, isLoading, isError}] = useFetch(baseAPI, payload);
    const [data, setData] = useState(null);

    useEffect(
        ()=> {
            setPayload({});
        }, []
      )

    const makeDatabase = () => {

        if (!isLoading) setData(response.data);
        
        setbaseAPI('https://task-router.firebaseio.com/post.json');
        // axios.post('https://task-router.firebaseio.com/users.json',{user: 'gggg'})
    }

    // const = data 

    return (

        <div className='CRAD'>
            <span className='item'>
                <span
                // className="todo-list-item-label"
                // onClick={onToggleDone}>{label}</span
                >
                </span>
                <button type="button"
                // className="btn btn-outline-success btn-sm float-right"
                // onClick={onToggleImportant}
                >
                    Delete
                </button>

                <button type="button"
                // className="btn btn-outline-danger btn-sm float-right"
                // onClick={onDelete}
                >
                    Edit
                </button>
            </span>

        </div>
    )
}

export default CRAD
