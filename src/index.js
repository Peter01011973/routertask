import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './HOC/context/CurrentUser';
import { Provider } from 'react-redux';
import store from './redux/store';

const app = (
    <CurrentUserProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </CurrentUserProvider>
)

ReactDOM.render(app, document.getElementById('root'));
