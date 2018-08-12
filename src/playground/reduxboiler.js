import { createStore, combineReducers } from 'redux';



const defaultCompanies = [{
        id: '1',
        name: 'Vale do Rio Doce',
        activity: 'Empresa de Mineracao',
        revenue: 1000000,
        lastFinancialReport: 0,
    }, {
        id: '2',
        name: 'Petrobras',
        activity: 'Empresa de Extracao de Petroleo',
        revenue: 2000000,
        lastFinancialReport: 1000,
    }, {
        id: '3',
        name: 'Banco do Brasil',
        activity: 'Banco do Brasil',
        revenue: 1500000,
        lastFinancialReport: 3000,
    }, 
];


const companiesReducer = ( state = defaultCompanies , action ) => {
    switch (action.type){
        default: 
            return state;
    }
}

const defaultFiltersState = [{
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}];

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

const sortByRevenue = () => ({
    type: 'SORT_BY_REVENUE'
})

const sortByName = () => ({
    type: 'SORT_BY_NAME'
})

const sortByActivity = () => ({
    type: 'SORT_BY_ACTIVITY'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'    
})

const setStartDate = ( date = undefined ) => ({
    type: 'SET_START_DATE',
    startDate: date   
})

const setEndDate = ( date = undefined ) => ({
    type: 'SET_END_DATE',
    endDate: date     
})


const filtersReducer = ( state = defaultFiltersState , action ) => {
    switch (action.type){
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
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


const getVisibleCompanies = (companies, { text, sortBy, startDate, endDate }) => {
    return companies.filter((company) => {
        const startDateMatch = typeof startDate !== 'number' || company.lastFinancialReport >= startDate;
        const endDateMatch = typeof endDate !== 'number' || company.lastFinancialReport <= endDate;
        const textMatch = typeof text !== 'string' || company.name.toLowerCase().includes(text.toLowerCase())
        console.log(sortBy);
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.lastFinancialReport < b.lastFinancialReport ? 1 : -1; 
        } else if(sortBy === 'revenue'){
            return a.revenue < b.revenue ? 1 : -1; 
        } else if(sortBy === 'name'){
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        } else if(sortBy === 'activity'){
        return a.activity.toLowerCase().localeCompare(b.activity.toLowerCase());
        }
    });
};


const store = createStore(
    combineReducers({
        companies: companiesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleCompanies = getVisibleCompanies(state.companies, state.filters)
    console.log(visibleCompanies);
});

//store.dispatch(setTextFilter('vale'));
//store.dispatch(setTextFilter(''));

store.dispatch(sortByDate());
store.dispatch(sortByRevenue());
store.dispatch(sortByName());
store.dispatch(sortByActivity());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

//store.dispatch(setEndDate(1345));
//store.dispatch(setEndDate());

//store.dispatch(setTextFilter('a'));

const demoState = {
    companies: [{
        id: '1',
        name: 'Vale do Rio Doce',
        activity: 'Empresa de Mineracao',
        revenue: 1000000,
        lastFinancialReport: 0,
    }],
    filters: {
        text: 'vale',
        sortBy: 'name', // revenue or date
        startDate: undefined,
        endDate: undefined
    }
};


