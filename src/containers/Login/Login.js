import React, {useState} from 'react';
import './Login.css';
// import { useForm } from "react-hook-form";

const Login = ({handleLogin, ...rest}) => {
    const [email, setEmail] = useState('');

    const handleAuthSubmit = event => {     
        const authForm = {
            email: event.target['email'].value,
            password: '111111'
        }
        handleLogin(authForm);
        event.preventDefault()
    }

    const handleChange = event => {
        setEmail(event.target.value);
    };

    return (
        <div className='login'>
            <h1 className='login__title'>Authorization</h1>
            <form className='login__form' onSubmit={handleAuthSubmit}>
                <label className='login__form__input'> Email:  
                    <input  name='email' type="text" value = {email} onChange={handleChange}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
