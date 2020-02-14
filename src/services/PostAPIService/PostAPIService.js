import axios from 'axios';
import { baseAPI } from '../../globalConst';

const transport = async (url, config) => {
    try {
        const response = await axios(url, config);
        return {
            response,
            success: true,
            message: response.statusText,
        }
    } catch (error) {
        return {
            response: error.response,
            success: false,
            message: error.message,
        }
    }
};

export const getAllPostsAPI = () => transport(`${baseAPI}`, { method: 'GET' })
export const deletePostAPI = id => transport(`${baseAPI}/${id}`, { method: 'DELETE' })
export const editPostAPI = data => transport(`${baseAPI}/${data.id}`, { method: 'PATCH', data })
export const addPostAPI = data => transport(`${baseAPI}`, { method: 'POST', data })
