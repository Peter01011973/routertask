import React, { useState, useEffect } from 'react';
import { baseAPI } from '../../globalConst';
import './PostsListWithHooks.css';
import axios from 'axios';
import CARDrender from '../../components/PostsListRender/PostsListRender';

const CRADhooks = ({ history }) => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [addOREditData, setAddOREditData] = useState(false);

    const axiosHandler = async (url, payload) => {
        setIsLoading(true);
        try {
            const result = await axios(url, payload);
            
            if (result.statusText === 'OK' || result.statusText === 'Created') {
                switch (result.config.method.toLowerCase().trim()) {
                    case 'patch': setPosts([...posts.map(post => post.id === result.data.id ? result.data : post)]); break;
                    case 'delete': setPosts([...posts.filter(post => +post.id !== +result.config.url.match(/\/([0-9]+)\/?$/)[1])]); break;
                    case 'post': setPosts([...posts, result.data]); break;
                    case 'get': setPosts(result.data); break;
                    default: setPosts([...posts])
                }
            }
        } catch (error) {
            setError(error)
        }
        setIsLoading(false);
    }

    useEffect(() => {
        let cancelled = false;    
        if (!cancelled) axiosHandler(baseAPI, { method: 'GET' })
        return () => cancelled = true;
    }, []);

    const deleteItemHandler = (event, id) =>{ 
        event.stopPropagation(); 
        axiosHandler(`${baseAPI}/${id}`, { method: 'DELETE' })
    }

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

    const editItemHandler = (event, Data) => {
        event.stopPropagation();
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
            data={posts}
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