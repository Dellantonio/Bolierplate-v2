import { defaultFiltersState } from '../dummydata/dummydata'; 

const filtersReducer = ( state = defaultFiltersState , action ) => {
    switch (action.type){
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SET_ACTIVITY_TEXT_FILTER':
            return {
                ...state,
                activityText: action.activityText
            };    
        case 'SORT_BY_REVENUE': 
            return {
                ...state,
                sortBy: 'revenue'
            };
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: 'date'
            }; 
        case 'SORT_BY_NAME':
            return {
                ...state,
                sortBy: 'name'
            }
        case 'SORT_BY_ACTIVITY':
            return {
                ...state,
                sortBy: 'activity'
            }        
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            };             
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            };    
        default:
            return state;     
    }
};

export default filtersReducer;