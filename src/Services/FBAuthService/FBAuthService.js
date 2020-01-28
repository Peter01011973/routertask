import React from 'react';
import axios from 'axios';
import AlertDialog from '../../components/UI/Dialog/Dialog';

const tryAuth = async authData => {
    const reqestData = { ...authData, returnSecureToken: true }
    let response = null;
    try {
        response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA', reqestData);
    } 
    catch (e) {
        alert('Everything is bad! Login failed!', e);
        // AlertDialog();       
    }
    return response
}

export default tryAuth;