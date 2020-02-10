import axios from 'axios';

const instanceAPI = axios.create(
    {
        baseURL: 'http://localhost:3000/post'
    }
) 

export const postsAPI = {
    getAllposts() {
        
    }
}