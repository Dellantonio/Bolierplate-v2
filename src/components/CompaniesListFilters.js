import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setActivityTextFilter, sortByName, sortByActivity, sortByRevenue, sortByDate } from '../actions/filters';

const CompaniesListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        /> 
        <input 
            type="text" 
            value={props.filters.activityText} 
            onChange={(e) => {
                props.dispatch(setActivityTextFilter(e.target.value))
            }}
        /> 
        <select 
            value={props.filters.sortBy} 
            onChange={(e) => {
                if (e.target.value === 'name') {
                    props.dispatch(sortByName());
                } else if (e.target.value === 'activity') {
                    props.dispatch(sortByActivity());
                } else if (e.target.value === 'revenue') {
                    props.dispatch(sortByRevenue());
                } else if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                }
            }}
            >
                <option value='name'>Nome</option>
                <option value='activity'>Atividade</option>
                <option value='revenue'>Faturamento</option>
                <option value='date'>DF mais Recente</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(CompaniesListFilters);