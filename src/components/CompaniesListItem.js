import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';


const CompaniesListItem = (props) => (
    <div>
        <Link to={`/lista/${props.id}`}>{props.name}</Link>
        <p>Atividade Principal: {props.activity}</p>
        <p>Faturamento Líquido: {numeral(props.revenue / 100).format('$0,0.00')}</p>
        <p>Último Demonstrativo Financeiro: {moment(props.lastFinancialReport).format('MM/YYYY')}</p>
    </div>
);

export default connect()(CompaniesListItem);

