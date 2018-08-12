import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CompaniesListItem = (props) => (
    <div>
        <Link to={`/lista/${props.id}`}>{props.name}</Link>
        <p>Atividade Principal: {props.activity}</p>
        <p>Faturamento Líquido: {props.revenue}</p>
        <p>Último Demonstrativo Financeiro: {props.lastFinancialReport}</p>
    </div>
);

export default connect()(CompaniesListItem);