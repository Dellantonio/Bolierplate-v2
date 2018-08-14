import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './firebase/firebase';
import configureStore from './store/configureStore';
import { setDefaultCompanies } from './actions/companies';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))    

store.dispatch(setDefaultCompanies()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))    
});

    