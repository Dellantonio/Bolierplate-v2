import React from 'react';
import CompaniesList from './CompaniesList';
import CompaniesListFilters from './CompaniesListFilters';

const PaginaInicial = () => (
    <div>
        <CompaniesListFilters />
        <CompaniesList />
    </div>
);

export default PaginaInicial;