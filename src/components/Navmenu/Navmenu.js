import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';
import {CurrentUserContext} from '../../HOC/context/CurrentUser';

const Navmenu = () => {

    const [user] = useContext(CurrentUserContext);
    
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
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/products'>Products</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/profile'>Profile</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/post'>CRUD (hooks)</NavLink></li>
                    <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/postclass'>CRUD (class)</NavLink></li>
                    {user ? 
                        <li className='navmenu__item'><NavLink className='link' activeClassName='active' to='/logout'>Logout</NavLink></li>
                        : signInANDsingUp
                    }
                </ul>       
        </div>
    )
}

export default Navmenu;
