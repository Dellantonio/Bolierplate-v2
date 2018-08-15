import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import companiesReducer from '../reducers/companies';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            companies: companiesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store
}