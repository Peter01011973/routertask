import React from 'react';
import './Logo.css';

const Logo = ({title}) => {
    return (
        <div className='logo'>
            <h3 className='logo__title'>{title}</h3>

        </div>
    )
}

export default Logo
