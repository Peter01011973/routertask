import React from 'react';
import AddOREdit from '../AddOREdit/addORedit';
import './PostsListRender.css';
import PostItemRender from './PostItemRender/PostItemRender';

const PostsListRender = ({
        error, isLoading, data, addNewItem, selectItemHandler, editItem,
        deleteItemHandler, editItemHandler, onAddHandler, addOREditData, afterAddOReditHandle
}) => {

// if (!data) { return <p>No data yet ...</p>; }
if (error) { return <p>Error ...</p>; }

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
                                <PostItemRender 
                                    key = {item.id}
                                    item = {item} 
                                    deleteItemHandler={deleteItemHandler} 
                                    editItemHandler={editItemHandler} 
                                    selectItemHandler={selectItemHandler} 
                                    isLoading={isLoading}
                                />
                            )
                        }
                    )}
                </tbody>
            </table>)
        : null

    return (
        <div className='container'>
            {isLoading ? <p className='loading'>Loading ...</p> : (!editItem && !addNewItem) && <button disabled={isLoading} onClick={() => { onAddHandler() }}>Add new item</button>}
            {(editItem || addNewItem) && <AddOREdit itemData={addOREditData} afterAddOReditHandle={afterAddOReditHandle} />}
            {renderItems}
        </div>
    );
}
export default PostsListRender
