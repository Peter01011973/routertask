import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './HOC/context/CurrentUser';
import { Provider } from 'react-redux';
import store from './redux/storeConfig';
import TrainingContextProvider from './HOC/context/ProductsContext';

const app = (
    <CurrentUserProvider>
        <TrainingContextProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </TrainingContextProvider>
    </CurrentUserProvider>
)

ReactDOM.render(app, document.getElementById('root'));
