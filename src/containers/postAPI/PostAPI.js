import React, { useState, useEffect } from 'react';
import { baseAPI } from '../../globalConst';
import './PostAPI.css';
import axios from 'axios';
import AddOREdit from '../PostClass/AddOREdit/addORedit';

const CRADhooks = ({ history }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [addOREditData, setAddOREditData] = useState(null);

    const axiosHandler = async (url, payload) => {
        setIsLoading(true);
        try {
            const result = await axios(url, payload);
            if (payload.method === 'GET') {
                setData(result.data)
            } else {
                const result = await axios(baseAPI, { method: 'GET' });
                setData(result.data)
            }
        } catch (error) {
            setError(error)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        axiosHandler(baseAPI, { method: 'GET' })
    }, []);

    const deleteItem = id => axiosHandler(`${baseAPI}/${id}`, { method: 'DELETE' })

    const afterAddOReditHandle = data => {
        // edit data PATCH
        if (editItem) {
            axiosHandler(`${baseAPI}/${data.id}`, { method: 'PATCH', data })
            setEditItem(false)
        }
        // add new item POST
        if (addNewItem) {
            axiosHandler(`${baseAPI}`, { method: 'POST', data })
            setAddNewItem(false)
        }
    }

    const editItemHandler = Data => {
        setAddOREditData(Data);
        setEditItem(true)
    }

    const selectItem = id => history.push(`/CRAD/${id}`)

    if (error) return <p>{error.message}</p>;
    if (isLoading) return <p>Loading ...</p>;
    if (!data) { return <p>No data yet ...</p>; }

    const renderItems = data ? data.map(
        (item, index) => {
            return (
                <div key={index} className='item'>
                    {/* TODO ask Dima about about using bind to send param */}
                    <span className='item__title' onClick={selectItem.bind(null, item.id)}>{item.title}</span>
                    <button type="button" onClick={deleteItem.bind(null, item.id)}>Delete</button>
                    <button type="button" onClick={editItemHandler.bind(null, item)}>Edit</button>
                </div>
            )
        }
    ) : null

    return (
        <div className='container'>
            {(!editItem && !addNewItem) && <button onClick={() => { setAddOREditData(null); setAddNewItem(true) }}>Add new item</button>}
            {(editItem || addNewItem) && <AddOREdit itemData={addOREditData} afterAddOReditHandle={afterAddOReditHandle} />}
            {renderItems}
        </div>
    );
}
export default CRADhooks