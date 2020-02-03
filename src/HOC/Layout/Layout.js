import React from 'react';
import './Layout.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <header className='layout__header'>
                <Header />
            </header>
            <main className='layout__body'>
                {children}
            </main>
            <footer className='layout__footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;
