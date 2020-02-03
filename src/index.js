import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './HOC/context/CurrentUser';

const app = (
    <CurrentUserProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CurrentUserProvider>
)

ReactDOM.render(app, document.getElementById('root'));
