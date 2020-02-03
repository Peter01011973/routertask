import React, {useContext} from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navmenu from '../Navmenu/Navmenu';
import {CurrentUserContext} from '../../HOC/context/CurrentUser';

const Header = () => {
    const [user] = useContext(CurrentUserContext)
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__container__logo'>
                    <Logo title = {'My router task'}/>
                </div>
                <div className='header__container__user'>
                    {user ? <h3>Welcome {user}</h3> : null}
                </div>
                <div className='header__container__navmenu'>
                    <Navmenu />
                </div>
            </div>
            
        </div>
    )
}

export default Header;
