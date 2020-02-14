import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './HOC/context/CurrentUser';
import { Provider } from 'react-redux';
import store from './redux/storeConfig';
import ProductsContextProvider from './HOC/context/ProductsContext';

const app = (
    <CurrentUserProvider>
        <ProductsContextProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </ProductsContextProvider>
    </CurrentUserProvider>
)

ReactDOM.render(app, document.getElementById('root'));
