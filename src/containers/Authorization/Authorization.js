import React, { useEffect, useState, useContext} from 'react';
import './Authorization.css';
import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';
import AuthForm from '../../components/AuthForm/AuthForm';
import useFetch from '../../hooks/useFetch';
import {Redirect} from 'react-router-dom';
import {CurrentUserContext} from '../../HOC/context/CurrentUser';

const Authorization = ({location}) => {

    const [payload, setPayload] = useState(null);
    const isSignin = location.pathname === '/login';
    const baseAPI = isSignin
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA';

    const [{response, isLoading, isError}] = useFetch(baseAPI, payload);
    const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
    const [email, setEmail] = useState(null);
    const [,setUser] = useContext(CurrentUserContext);
    
    const authTitle = isSignin ? 'Sign IN' : 'Sign UP';

    const handleAuthSubmit = (email, password) => {
        
        // const payload = {
        //     email,
        //     password,
        //     returnSecureToken: true
        // }
        const payload = {
            method: 'post',
            data: {
                email,
                password,
                returnSecureToken: true
            }
        }       
        setEmail(email)
        setPayload(payload)

    }

    useEffect(() => {
        if (response && response.data && response.data.localId) {
            localStorage.setItem('token', response.data.localId);
            localStorage.setItem('email',email);
            setIsSuccessfullSubmit(true);
            setUser(email);
        }
    }, [email, response, setUser])

    if (isSuccessfullSubmit && location.state) {return <Redirect to={location.state.from}/>} 
    else if (isSuccessfullSubmit) {return <Redirect to='/'/>}    

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

// Request Headers
// :authority: identitytoolkit.googleapis.com
// :method: POST
// :path: /v1/accounts:signInWithPassword?key=AIzaSyBqymITIAQwvv51M9pXu0jnJ2gA8ncXnTA
// :scheme: https
// accept: application/json, text/plain, */*
// accept-encoding: gzip, deflate, br
// accept-language: en-US,en;q=0.9
// content-length: 73
// content-type: application/json;charset=UTF-8
// origin: http://localhost:3000
// referer: http://localhost:3000/login
// sec-fetch-mode: cors
// sec-fetch-site: cross-site
// user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36
// x-client-data: CJK2yQEIprbJAQjBtskBCKmdygEIy67KAQi9sMoBCPe0ygEIlrXKAQjttcoBGKukygE=


// Request Payload
// {email: "maliar@zfort.com", password: "111111", returnSecureToken: true}