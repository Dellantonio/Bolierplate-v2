
const getRevenuesTotal = (companies) => {
    if ( companies.length === 0){
        return 0;
    } else {
        return companies
        .map(company => company.revenue)
        .reduce((amount, current) => amount + current, 0) / 100;
    }
}

export default getRevenuesTotal;