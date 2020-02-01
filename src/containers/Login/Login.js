import React, { useEffect} from 'react';
import './Login.css';
import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';
import AuthForm from '../../components/AuthForm/AuthForm';
import useFetch from '../../hooks/useFetch';

const Login = ({handleLogin, location, history}) => {
    // const [isLoading, setLoading] = useState(false);
    // const [isError, setError] = useState(false);

    const [{response, error, isLoading}, doFetch] = useFetch();

    const handleAuthSubmit = (email) => {
        // console.log(email);
        
        const user = {
            email: 'maliar@zfort.com',
            password: '111111',
            returnSecureToken: true
        }

        // setError(false);
        // setLoading(true);
        doFetch({
            method: 'post',
            user 
            // user
        });
        // try {
        //     const response = await tryAuth(authData)

        // } catch (error) {
        //     setError(true);
        //     setLoading(false);
        // }
    }

    useEffect(() => {
        if (response && response.data && response.data.localId) {
            localStorage.setItem('token', response.data.localId);
            handleLogin();
            // setLoading(false);
            // if (location.state) { history.replace(location.state.from) }
        }
    }, [response])

    return (
        <div className='login'>
            {isLoading && <h4>Loading ...</h4>}
            {error && <CustomizedSnackbars />}
            <h1 className='login__title'>Authorization</h1>
            <AuthForm handleAuthSubmit = {handleAuthSubmit}/>
        </div>
    )
}

export default Login
