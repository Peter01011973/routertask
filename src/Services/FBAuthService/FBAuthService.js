// import React from 'react';
import axios from 'axios';
import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';

const tryAuth = async (authData) => {
    const reqestData = { ...authData, returnSecureToken: true }
    console.log('service', reqestData);
    
    let response = null;
    try {
        response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA', reqestData);
    } 
    catch (e) {
        alert('Everything is bad! Login failed!', e);
        // CustomizedSnackbars( ); 
    }
    return response
}

export default tryAuth;