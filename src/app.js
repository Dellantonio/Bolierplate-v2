import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { setDefaultCompanies } from './actions/companies';
import { login, logout} from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;  
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))    

firebase.auth().onAuthStateChanged((user) => {
    if (user){
        store.dispatch(login(user.uid));
        store.dispatch(setDefaultCompanies()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/inicio');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});    