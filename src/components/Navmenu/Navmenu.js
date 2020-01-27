import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const Navmenu = () => {
    return (
        <div className='navmenu'>
            <div className='navmenu__items'>
                <NavLink className='navmenu__item' activeClassName='active' exact to='/'>Home</NavLink>
                <NavLink className='navmenu__item' activeClassName='active' to='/news'>News</NavLink>
                <NavLink className='navmenu__item' activeClassName='active' to='/profile'>Profile</NavLink>
                <NavLink className='navmenu__item' activeClassName='active' to='/login'>Login</NavLink>
            </div>
            
        </div>
    )
}

export default Navmenu;
