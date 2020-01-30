import React from 'react';
import './Login2.css';

// import CustomizedSnackbars from '../../components/UI/Snackbar/Snackbar';
import AuthForm2 from '../../components/AuthForm2/AuthForm2';

const Login2 = () => {


    return (
        <div className='login'>
            {/* {isLoading && <h4>Loading ...</h4>}
            {isError && <CustomizedSnackbars />} */}
            <h1 className='login__title'>Authorization</h1>
            <AuthForm2 />
        </div>
    )
}

export default Login2