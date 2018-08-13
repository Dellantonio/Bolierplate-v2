import React from 'react';
import { connect } from 'react-redux';
import CompaniesListItem from './CompaniesListItem';
import getVisibleCompanies from '../selectors/companies';
import getRevenueTotals from '../selectors/revenuesTotal'; 
import numeral from 'numeral';


const CompaniesList = (props) => (
    <div>   
        <h1>Companies List</h1>
        <h3>O Faturamento conjunto das empresas abaixo é: {
            numeral(getRevenueTotals(props.companies)).format('$0,0.00')
        }
        </h3>
        {props.companies.map((company, index) => {
            return <CompaniesListItem {...company} key={index}/>    
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        companies: getVisibleCompanies(state.companies, state.filters)
    };
};

export default connect(mapStateToProps)(CompaniesList);

