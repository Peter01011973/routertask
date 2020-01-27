import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navmenu from '../Navmenu/Navmenu';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__container__logo'>
                    <Logo title = {'My router task'}/>
                </div>
                <div className='header__container__navmenu'>
                    <Navmenu />
                </div>
            </div>
            
        </div>
    )
}

export default Header;
