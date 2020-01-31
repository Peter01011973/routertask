import axios from 'axios';

const tryAuth = async (authData) => {
    const reqestData = { ...authData, returnSecureToken: true }    
    // let response = null;
    // try {
        return await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA', reqestData);
    // } 
    // catch (e) {
    //     // alert('Everything is bad! Login failed!', e);
    //     // CustomizedSnackbars(); 
    //     return e
    // }   
}

export default tryAuth;