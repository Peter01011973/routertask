import React, { useState, useEffect } from 'react';
import './PostsListWithHooks.css';
import CRUDrender from '../../components/PostsListRender/PostsListRender';
import { useDispatch, useSelector } from 'react-redux';
import { editPostSAGA, addPostsSAGA, deletePostSAGA, addPostSAGA } from '../../redux/actions';

const CRADhooks = ({ history }) => {
    const [addNewItem, setAddNewItem] = useState(false);
    const [editItem, setEditItem] = useState(false);
    const [addOREditData, setAddOREditData] = useState(false);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.reducerPosts.posts);
    const isLoading = useSelector(state => state.reducerPosts.isLoading);
    const error = useSelector(state => state.reducerPosts.error);

    useEffect(() => {
        dispatch(addPostsSAGA());  
    }, [dispatch]);

    const deleteItemHandler = (event, id) =>{ 
        event.stopPropagation(); 
        dispatch(deletePostSAGA(id));
    }

    const afterAddOReditHandle = data => {
        if (editItem) {
            dispatch(editPostSAGA(data))
            setEditItem(false)
        }
        if (addNewItem) {
            dispatch(addPostSAGA(data))
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
        <CRUDrender
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


    // const responseHandler = async (method) => {
    //     setIsLoading(true);
    //     // if (cancelled) return;
    //     method().then(result => {
    //         const { response, success, message } = result;
    //         if (!success) { setError(message) }
    //         else {
    //             switch (response.config.method.toLowerCase().trim()) {
    //                 case 'patch': dispatch(updatePost(response.data)); break; // setPosts([...posts.map(post => post.id === response.data.id ? response.data : post)]); break;
    //                 case 'delete': dispatch(deletePost(+response.config.url.match(/\/([0-9]+)\/?$/)[1]));  break; // setPosts([...posts.filter(post => +post.id !== +response.config.url.match(/\/([0-9]+)\/?$/)[1])]); break;
    //                 case 'post': dispatch(appendPost(response.data));  break;// setPosts([...posts, response.data]);
    //                 case 'get': dispatch(appendPosts(response.data)); break;// setPosts(response.data);              
    //                 default: setPosts([...posts])
    //             }
    //         }
    //         setIsLoading(false);
    //     })            
    // }