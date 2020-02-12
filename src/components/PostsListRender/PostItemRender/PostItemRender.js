import React from 'react';

const PostItemRender = ({item, deleteItemHandler, editItemHandler, selectItemHandler, isLoading}) => {
    return (
        <tr key={item.id} onClick={() => selectItemHandler(item.id)} className='table-row'>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>{item.userId}</td>
            <td>
                <button type="button" disabled={isLoading} onClick={(event) => deleteItemHandler(event, item.id)}>Delete</button>
                <button type="button" disabled={isLoading} onClick={(event) => editItemHandler(event, item)}>Edit</button>
            </td>
        </tr>
    )
}

export default PostItemRender
