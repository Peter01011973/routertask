import React, {useState} from 'react';
import './Login.css';
import tryAuth from '../../Services/FBAuthService/FBAuthService';
import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';
import AuthForm from '../../components/AuthForm/AuthForm';

const Login = ({handleLogin, location, history}) => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    const handleAuthSubmit = async (email, password) => {
        console.log(email, password);
        
        const authData = {
            email,
            password
        }

        setError(false);
        setLoading(true);
        try {
            const response = await tryAuth(authData)
            if (response && response.data && response.data.localId) {
                localStorage.setItem('token', response.data.localId);
                handleLogin();
                setLoading(false);
                if (location.state) { history.replace(location.state.from) }
            }
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }

    return (
        <div className='login'>
            {isLoading && <h4>Loading ...</h4>}
            {isError && <CustomizedSnackbars />}
            <h1 className='login__title'>Authorization</h1>
            <AuthForm handleAuthSubmit = {handleAuthSubmit}/>
        </div>
    )
}

export default Login
