import { createStore, combineReducers } from 'redux';
import companiesReducer from '../reducers/companies';
import filtersReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            companies: companiesReducer,
            filters: filtersReducer
        })
    );
    return store
}