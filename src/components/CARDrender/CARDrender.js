import React from 'react';
import AddOREdit from '../AddOREdit/addORedit';
import './CARDrender.css';
import { TablePagination } from '@trendmicro/react-paginations';
import '@trendmicro/react-paginations/dist/react-paginations.css';

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
                        (item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>{item.userId}</td>
                                    <td>
                                        <button type="button" onClick={() => deleteItemHandler(item.id)}>Delete</button>
                                        <button type="button" onClick={() => editItemHandler(item)}>Edit</button>
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
            {(!editItem && !addNewItem) && <button onClick={() => { onAddHandler() }}>Add new item</button>}
            {(editItem || addNewItem) && <AddOREdit itemData={addOREditData} afterAddOReditHandle={afterAddOReditHandle} />}
            {renderItems}
        </div>
    );
}
export default CARDrender

{/* <table className="table">
<thead>
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>E-mail</th>
        <th>Phone</th>
    </tr>
</thead>
<tbody>
    { props.data.map(item =>(
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    ))}
</tbody>
</table> */}