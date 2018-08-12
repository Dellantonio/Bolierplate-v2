

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

export const setActivityTextFilter = (activityText = '') => ({
    type: 'SET_ACTIVITY_TEXT_FILTER',
    activityText: activityText
});

export const sortByRevenue = () => ({
    type: 'SORT_BY_REVENUE'
})

export const sortByName = () => ({
    type: 'SORT_BY_NAME'
})

export const sortByActivity = () => ({
    type: 'SORT_BY_ACTIVITY'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'    
})

export const setStartDate = ( date = undefined ) => ({
    type: 'SET_START_DATE',
    startDate: date   
})

export const setEndDate = ( date = undefined ) => ({
    type: 'SET_END_DATE',
    endDate: date     
})