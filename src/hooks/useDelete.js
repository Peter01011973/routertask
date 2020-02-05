import {useState, useEffect} from 'react';
import axios from 'axios';

const useDelete = (url, payload) => {
    const [itemDelete, setItemDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [DeleteError, setDeleteError] = useState(false);    

    useEffect(() => {
        const fetchData = async () => {
            console.log('deleting')
               
            setIsDeleting(true);
            setDeleteError(false);    
            try {
                const itemDelete = await axios(url, payload);
                setItemDelete(itemDelete);
            } catch (error) {
                setDeleteError(true);
            }
            setIsDeleting(false);
        };
        if (payload) fetchData();       
    }, [payload]);

    return [{ itemDelete, isDeleting, DeleteError }];
};
export default useDelete