import React, { useState, useEffect, useRef } from 'react';
import './addORedit.css';

const AddORedit = ({ afterAddOReditHandle, itemData }) => {
    
    const initData = {
        title: itemData ? itemData.title : '',
        body: itemData ? itemData.body : '',
        userId: itemData ? itemData.userId : 1,
        id: itemData ? itemData.id : null
    }
    const inputRef = useRef();
    const [data, setData] = useState(initData);

    const submitHandler = (event) => {
        event.preventDefault();
        afterAddOReditHandle(data);
    }

    useEffect(
        () => {inputRef.current.focus();}
    ,[])

    return (
        <form onSubmit={submitHandler}>
            <label>Title:
                <input 
                    type='text' 
                    value={data.title} 
                    onChange={event => setData({...data, title: event.target.value })} 
                    ref={inputRef}
                />
            </label>
            <label>Body:
                <input type='text' value={data.body} onChange={event => setData({...data, body: event.target.value })} />
            </label>
            <label>UserId:
                <input type='number' value={data.userId} onChange={event => setData({...data, userId: event.target.value })} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddORedit