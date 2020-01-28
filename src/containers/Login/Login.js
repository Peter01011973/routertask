import React, {useState} from 'react';
import './Login.css';
import tryAuth from '../../Services/FBAuthService/FBAuthService';

const Login = ({handleLogin, location, history}) => {
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleAuthSubmit = event => {
        const authData = {
            email: event.target['email'].value,
            password: '111111'
        }
        let response = null;
        setLoading(true);
        // console.log(authData);
        
        tryAuth(authData).then(
            data => {
                response = data;
                setLoading(false);
                console.log(data);
                
                if (response && response.data && response.data.localId) {
                    localStorage.setItem('token', response.data.localId);
                    handleLogin(authData);
                }
                if (location.state.from) { history.replace(location.state.from) }
            }
        );
        event.preventDefault()
    }

    const handleChange = event => {
        setEmail(event.target.value);
    };

    return (
        <div className='login'>
            {isLoading && <h4>Loading ...</h4>}
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
