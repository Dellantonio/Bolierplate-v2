import { defaultCompanies } from '../dummydata/dummydata';

const companiesReducer = ( state = defaultCompanies , action ) => {
    switch (action.type){
        default: 
            return state;
    }
}

export default companiesReducer;