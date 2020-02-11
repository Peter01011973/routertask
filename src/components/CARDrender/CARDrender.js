import React from 'react';
import AddOREdit from '../AddOREdit/addORedit';
import './CARDrender.css';

const CARDrender = ({
        error, isLoading, data, addNewItem, selectItemHandler, editItem,
        deleteItemHandler, editItemHandler, onAddHandler, addOREditData, afterAddOReditHandle
}) => {

if (error) return <p>{error.message}</p>;
if (isLoading) return <p>Loading ...</p>;
if (!data) { return <p>No data yet ...</p>; }

    const renderItems = data ?
        (
            <table className="table">
                <thead className='table__header'>
                    <tr>
                        <th >ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>UserId</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (item) => {
                            return (
                                <tr key={item.id} onClick={() => selectItemHandler(item.id)} className='table-row'>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>{item.userId}</td>
                                    <td>
                                        <button type="button" disabled={isLoading} onClick={() => deleteItemHandler(item.id)}>Delete</button>
                                        <button type="button" disabled={isLoading} onClick={() => editItemHandler(item)}>Edit</button>
                                    </td>
                                </tr>
                                // <div key={index} className='item'>
                                //     <span className='item__title' onClick={() => selectItemHandler(item.id)}>{item.title}</span>
                                //     <button type="button" onClick={() => deleteItemHandler(item.id)}>Delete</button>
                                //     <button type="button" onClick={() =>editItemHandler(item)}>Edit</button>
                                // </div>
                            )
                        }
                    )}
                </tbody>
            </table>)
        : null

    return (
        <div className='container'>
            {(!editItem && !addNewItem) && <button disabled={isLoading} onClick={() => { onAddHandler() }}>Add new item</button>}
            {(editItem || addNewItem) && <AddOREdit itemData={addOREditData} afterAddOReditHandle={afterAddOReditHandle} />}
            {renderItems}
        </div>
    );
}
export default CARDrender
