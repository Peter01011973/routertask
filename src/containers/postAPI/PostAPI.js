// import React, { useState, useEffect } from 'react';
// import useFetch from '../../hooks/useFetch';
// import {baseAPI} from '../../globalConst';
// import './PostAPI.css';
// import AddItem from './AddItem/AddItem';
// import useDelete from '../../hooks/useDelete';

// const CRAD = ({history}) => {
//     // const 
//     const [itemData, setItemData] = useState(null);
//     const [canAdd, setCanAdd] = useState(false);
//     const [payload, setPayload] = useState(null); 
//     const [{ response, isLoading, isError }] = useFetch(baseAPI, payload)
//     // delete
//     const [payloadForDelete, setPayloadForDelete] = useState(null);
//     const [showDeleteConfirm, setShowDeleteConfirm] = useState(true);
//     const [url1, setUrl1] = useState(baseAPI)
//     const [{ itemDelete, isDeleting, DeleteError }] = useDelete(url1, payloadForDelete)

//     useEffect(() => setPayload({}), [])

//     const addNewItemHandler = () => setCanAdd(true);
//     const selectItem = id => history.push(`/CRAD/${id}`) 

//     const deleteItem = id => { 
//         setUrl1(`${baseAPI}/${id}`); 
//         setShowDeleteConfirm(true); 
//         setPayloadForDelete({method: 'DELETE'}) 
//     }
//     const afterDelete = () => { 
//         setPayload({}); 
//         setShowDeleteConfirm(false) 
//     }
//     const afterAddHandle = editIsOver => {
//         if (editIsOver) setItemData(null);
//         setCanAdd(false); 
//         setPayload({})
//     }

//     const editItem = Data => setItemData(Data)

//     if (isLoading) { return <p>Loading...</p> }
//     if (isError) return (<p>We have an error</p>)
//     if (isDeleting) { return <p>Deleting...</p> }
//     if (DeleteError) return (<p>We have an error during deleting</p>)
    
//     const renderItems = response && response.data ? response.data.map(
//         (item, index) => {
//             return (
//                 <div key={index} className='item'>
//                     {/* TODO ask Dima about about using bind to send param */}
//                     <span className='item__title' onClick={selectItem.bind(null,item.id)}>{item.title}</span>
//                     <button type="button" onClick = {deleteItem.bind(null,item.id)}>Delete</button>
//                     <button type="button" onClick={editItem.bind(null,item)}>Edit</button>
//                 </div>
//             )
//         }
//     ) : null

//     const renderDeleteSuccess = itemDelete ? (
//         <>
//             <h3>Item has been successfully deleted...</h3>
//             <button onClick = {afterDelete}>Ok</button>
//         </>
//     ) : null
   
//     return (
//         <div className='container'>
//             {itemData && <AddItem itemData = {itemData} afterAddHandle = {afterAddHandle}/>}
//             {showDeleteConfirm && renderDeleteSuccess}
//             {canAdd 
//             ? <AddItem afterAddHandle = {afterAddHandle}/>
//             : <button onClick = {addNewItemHandler}>Add New Item</button>}
//             {renderItems}
//         </div>
//     )
// }

// export default CRAD


// With hook

import React, { useState, useEffect } from 'react';
import { baseAPI } from '../../globalConst';
import './PostAPI.css';
// import axios from 'axios';
import AddOREdit from '../PostClass/AddOREdit/addORedit';
import useFetch from '../../hooks/useFetch';

const CRADhooks = ({ history }) => {
    const [url, setUrl] = useState('http://localhost:3000/post');    
    // const [data, setData] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState({method: 'GET'});
    // const [error, setError] = useState(null);
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [addOREditData, setAddOREditData] = useState(null);
    const [{ response, isLoading, error }] = useFetch(url, payload)

    useEffect(() => setPayload({}), [])

    // useEffect(() => {

    //     const fetchData = async () => {
    //         setIsLoading(true);   
    //         console.log('1',payload);                    
    //         setError(false);
    //         try {                
    //             if (payload.method === 'GET') {
    //                 const response = await axios(url, payload);
    //                 console.log('2',payload);
    //                 setData(response.data);
    //             }
    //         } catch (error) {
    //             setError(true);
    //         }
    //         setIsLoading(false);
    //     };
    //     fetchData();
    // }, [payload]);

    const deleteItem = id => {
        setUrl(`${baseAPI}/${id}`);
        setPayload({ method: 'DELETE' })
        setPayload({method: 'GET'})
    }

    const afterAddOReditHandle = data => {
        // edit data PATCH
        if (editItem) {
            setUrl(`${baseAPI}/${data.id}`);
            setPayload({ method: 'PATCH', data })
            setEditItem(false)
        }
        // add new item POST
        if (addNewItem) {
            setUrl(`${baseAPI}`);
            setPayload({ method: 'POST', data })
            setAddNewItem(false)
        }
        setUrl(baseAPI);
        setPayload({method: 'GET'})
    }

    const editItemHandler = Data => {
        setAddOREditData(Data);
        setEditItem(true)
    }

    const selectItem = id => history.push(`/CRAD/${id}`)

    if (error) return <p>{error.message}</p>;
    if (isLoading) return <p>Loading ...</p>;
    // if (!data) { return <p>No data yet ...</p>;}

    const renderItems = response ? response.data.map(
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
            {(!editItem && !addNewItem) && <button onClick={() => { addOREditData = null; setAddNewItem(true) }}>Add new item</button>}
            {(editItem || addNewItem) && <AddOREdit itemData={addOREditData} afterAddOReditHandle={afterAddOReditHandle} />}
            {renderItems}
        </div>
    );
}
export default CRADhooks