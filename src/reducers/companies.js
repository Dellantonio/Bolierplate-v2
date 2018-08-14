import { defaultCompanies } from '../dummydata/dummydata';

const stateDefault = [];

const companiesReducer = ( state = stateDefault , action ) => {
    switch (action.type){
        case 'SET_COMPANIES': 
            return action.companies;
        default: 
            return state;
    }
}

export default companiesReducer;