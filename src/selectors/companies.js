

const getVisibleCompanies = (companies, { text, activityText, sortBy, startDate, endDate }) => {
    return companies.filter((company) => {
        const startDateMatch = typeof startDate !== 'number' || company.lastFinancialReport >= startDate;
        const endDateMatch = typeof endDate !== 'number' || company.lastFinancialReport <= endDate;
        const textMatch = typeof text !== 'string' || company.name.toLowerCase().includes(text.toLowerCase());
        const activityMatch = typeof activityText !== 'string' || company.activity.toLowerCase().includes(activityText.toLowerCase());
        return startDateMatch && endDateMatch && textMatch && activityMatch;
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

export default getVisibleCompanies;