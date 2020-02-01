import React, {useState} from 'react';
import './Login.css';
import tryAuth from '../../Services/FBAuthService/FBAuthService';
import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';
import AuthForm from '../../components/AuthForm/AuthForm';
import useFetch from '../../hooks/useFetch';

const Login = ({handleLogin, location, history}) => {
    // const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    const [{response, error, isLoading}, doFetch] = useFetch();

    const handleAuthSubmit = async (email) => {
        // console.log(email);
        
        const user = {
            email,
            password: '111111'
        }

        setError(false);
        setLoading(true);
        doFetch({
            method: 'post',
            user
        });

        useEffect(() => {
            if (response && response.data && response.data.localId) {
                localStorage.setItem('token', response.data.localId);
                handleLogin();
                setLoading(false);
                if (location.state) { history.replace(location.state.from) }
            }
        }, [response])
        // try {
        //     const response = await tryAuth(authData)

        // } catch (error) {
        //     setError(true);
        //     setLoading(false);
        // }
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
