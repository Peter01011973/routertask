import React from 'react';
import './Home.css';
import logo from './logo.svg';
// import AuthForm2 from '../../components/AuthForm2/AuthForm2';

const Home = () => {   
    return (
        <div className='home'>           
            {/* <AuthForm2 /> */}
            <h1>React Router is an awesome tool!</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Home
