import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {baseAPI} from '../../globalConst';
import {connect} from 'react-redux';

const CRADitem = () => {
    const {id} = useParams();
    const [payload] = useState({});

    // if (posts && posts.length > 0) 
    const [{ response, isLoading, isError }] = useFetch(`${baseAPI}/${id}`,payload);
    // const [data, setData] = useState(null);
    
    // useEffect(
    //     () => setPayload({}), []
    // )

    if (isLoading) return <p>Loading...</p> 
    if (isError) return (<p>We have an error</p>)
    
    const renderItem = response ? (
        <>
            <h3>ID: {response.data.id}</h3>
            <h3>Title: {response.data.title}</h3>
            <h3>Body: {response.data.body}</h3>
        </>
    ) : null
    
    return (
        <div>
            {renderItem}
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        posts: state.reducerPosts.posts
    }
}  

export default connect(mapStateToProps)(CRADitem)