import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const Navmenu = ({ auth }) => {

    const signInANDsingUp = (
        <>
            <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/register'>Sign Up</NavLink></li>
            <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/login'>Sing In</NavLink></li>
        </>
    )
           
    return (
        <div className='navmenu'>
                <ul className='navmenu__items'>
                    <li className='navmenu__item'> <NavLink className='link' activeClassName='active' exact to='/'>Home</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/news'>News</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/profile'>Profile</NavLink></li>
                    {auth ? 
                        <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/logout'>Logout</NavLink></li>
                        : signInANDsingUp
                    }
                </ul>       
        </div>
    )
}

export default Navmenu;
