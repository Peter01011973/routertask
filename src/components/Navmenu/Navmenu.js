import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

const Navmenu = () => {
    return (
        <div className='navmenu'>
            {/* <div className='navmenu__items'> */}
                <ul className='navmenu__items'>
                    <li className='navmenu__item'> <NavLink className='link' activeClassName='active' exact to='/'>Home</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/news'>News</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/profile'>Profile</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/login'>Login</NavLink></li>
                </ul>
            {/* </div> */}
            
        </div>
    )
}

export default Navmenu;
