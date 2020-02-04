import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
// import axios from 'axios';
import './CRAD.css';
// import AddItem from '../../components/AddItem/AddItem';

const CRAD = ({history}) => {

    const [payload, setPayload] = useState(null);
    const [baseAPI] = useState('https://jsonplaceholder.typicode.com/posts');
    const [{ response, isLoading, isError }] = useFetch(baseAPI, payload);

    useEffect(
        () => {
            const payload = {}
            setPayload(payload);
        }, []
    )

    const selectItem = (id) => {
        history.push(`/CRAD/${id}`)      
    }

    const deleteItem = () => {}

    if (isLoading) { return <p>Loading...</p> }
    if (isError) return (<p>We have an error</p>)

    const renderItems = response ? response.data.map(
        (item, index) => {
            return (
                <div key={index} className='item'>
                    <span className='item__title' onClick={selectItem.bind(null,item.id)}>{item.title}</span>
                    <button type="button" onClick = {deleteItem}>Delete</button>
                    <button type="button">Edit</button>
                </div>
            )
        }
    ) : null

    const addNewItemHandler = () => {history.push(`/CRAD/add`)}
    
    return (
        <div className='CRAD'>
            <button onClick = {addNewItemHandler}>Add New Item</button>
            {renderItems}
        </div>
    )
}

export default CRAD
