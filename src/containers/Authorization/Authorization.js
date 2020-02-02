import React, { useEffect, useState} from 'react';
import './Authorization.css';
import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';
import AuthForm from '../../components/AuthForm/AuthForm';
import useFetch from '../../hooks/useFetch';
import {Redirect} from 'react-router-dom';

const Authorization = ({handleLogin, location}) => {
    const [{response, isLoading, isError}, doFetch] = useFetch();
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
    const [email, setEmail] = useState(null)
    
    const isSignin = location.pathname === '/login';
    const authType = isSignin ? 'signIn' : 'signUp';
    const authTitle = isSignin ? 'Sign IN' : 'Sign UP';
    const baseAPI = isSignin
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA';

    const handleAuthSubmit = (email, password) => {
        
        const user = {
            email,
            password,
            returnSecureToken: true
        }
        setEmail(email)
        console.log('dofetch');
        
        doFetch({url: baseAPI, payload: user});
    }

    useEffect(() => {
        if (response && response.data && response.data.localId) {
            localStorage.setItem('token', response.data.localId);
            localStorage.setItem('email',email);
            setIsSuccessfullSubmit(true);
            handleLogin(email);
        }
    }, [response])

    // useEffect(() =>{ if (error)  console.log('Error', error)}, [error])

    if (isSuccessfullSubmit && location.state) {return <Redirect to={location.state.from}/>} 
    else if (isSuccessfullSubmit) {return <Redirect to='/'/>}

    console.log('isLoading', isLoading);
    console.log('response', response);
    console.log('isError',isError);
    
    
    

    return (
        <div className='login'>
            {isLoading && <h4>Loading ...</h4>}
            {isError && <CustomizedSnackbars />}
            <h1 className='login__title'>{authTitle}</h1>
            <AuthForm handleAuthSubmit = {handleAuthSubmit} isLoading = {isLoading}/>
        </div>
    )
}

export default Authorization
