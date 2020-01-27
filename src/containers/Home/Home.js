import React from 'react';
import './Home.css';
import logo from './logo.svg';

const Home = () => {
    return (
        <div className='home'>
            <h1>React Router is an awesome tool!</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default Home
