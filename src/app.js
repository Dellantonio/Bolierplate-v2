import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import getVisibleCompanies from './selectors/companies';


import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleCompanies = getVisibleCompanies(state.companies, state.filters)
    console.log(visibleCompanies);
});

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))        