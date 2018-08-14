

export const defaultCompanies = [{
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
}, {
    id: '4',
    name: 'Celesc',
    activity: 'Distribuiçãp de Energia Elétrica',
    revenue: 500000,
    lastFinancialReport: 1500,
},{
    id: '5',
    name: 'Riachuelo',
    activity: 'Varejo',
    revenue: 1200000,
    lastFinancialReport: 500,
}];

export const defaultFiltersState = [{
    text: '',
    activityText: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}];
