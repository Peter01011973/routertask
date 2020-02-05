import React, { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import {baseAPI} from '../../../globalConst';
import './AddItem.css';

const AddItem = ({afterAddHandle, itemData=null}) => {
    const [payload, setPayload] = useState(null);
    const [url, setUrl] = useState(baseAPI);
    const [editIsOver, setEditIsOver] = useState(false);
    const [{ response, isLoading, isError }] = useFetch(url, payload);
    
    const addOREdit = !!itemData;
    const initData = {
        title: addOREdit ? itemData.title : '',
        body: addOREdit ? itemData.body : '',
        userId: addOREdit ? itemData.userId : 1
    } 
    const [data, setData] = useState(initData); 

    const submitHandler = (event) => {
        event.preventDefault(); 
        if (addOREdit) setUrl(`${baseAPI}/${itemData.id}`)     
        setPayload({
            method: addOREdit ? 'PATCH' : 'POST',
            data 
        })
        setEditIsOver(true);
    }

    if (isLoading) return <p>Loading...</p> 
    if (isError) return (<p>We have an error</p>)
    
    const renderRez = (
        <div className = 'renderRez'>
            <h3>Item has been successfully {addOREdit ? 'changed' : 'added'}</h3>
            <button onClick={afterAddHandle.bind(null, editIsOver)}>Ok</button>
        </div>
    )

    const renderForm = (
        <form onSubmit={submitHandler}>
            <label>Title:
                <input type='text' value={data.title} onChange={event => setData({...data,title: event.target.value})}/>
            </label>
            <label>Body:
                <input type='text' value={data.body} onChange={event => setData({...data,body: event.target.value})} />
            </label>
            <label>UserId:
                <input type='number' value={data.userId} onChange={event => setData({...data,userId: event.target.value})} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )    
    
    return (
        <div>
           {response ? renderRez : renderForm}
        </div>
    )
}

export default AddItem
