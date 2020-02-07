import React, { useState, useEffect } from 'react';
import { baseAPI } from '../../globalConst';
import './PostAPI.css';
import axios from 'axios';
// import Pagination from "react-js-pagination";
import CARDrender from '../../components/CARDrender/CARDrender';

const CRADhooks = ({ history }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [addOREditData, setAddOREditData] = useState(false);

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

    const deleteItemHandler = id => axiosHandler(`${baseAPI}/${id}`, { method: 'DELETE' })

    const afterAddOReditHandle = data => {
        if (editItem) {
            axiosHandler(`${baseAPI}/${data.id}`, { method: 'PATCH', data })
            setEditItem(false)
        }
        if (addNewItem) {
            axiosHandler(`${baseAPI}`, { method: 'POST', data })
            setAddNewItem(false)
        }
    }

    const editItemHandler = Data => {
        setAddOREditData(Data);
        setEditItem(true)
    }

    const selectItemHandler = id => history.push(`/CRAD/${id}`)
    const onAddHandler = () => {
        setAddOREditData(null);
        setAddNewItem(true)
    }

    return (
        <CARDrender
            error={error}
            isLoading={isLoading}
            data={data}
            editItem={editItem}
            addNewItem={addNewItem}
            addOREditData={addOREditData}
            selectItemHandler={selectItemHandler}
            deleteItemHandler={deleteItemHandler}
            editItemHandler={editItemHandler}
            onAddHandler={onAddHandler}
            afterAddOReditHandle={afterAddOReditHandle}
        />
    )
}
export default CRADhooks