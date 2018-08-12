import React from 'react';
import { connect } from 'react-redux';
import CompaniesListItem from './CompaniesListItem';
import getVisibleCompanies from '../selectors/companies';

const CompaniesList = (props) => (
    <div>
        <h1>Companies List</h1>
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