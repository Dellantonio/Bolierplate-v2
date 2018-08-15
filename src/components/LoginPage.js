import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Almanaque do Mercado</h1>
            <p>Está na hora de achar as maiores barganhas do mercado!</p>    
            <button 
            className="button"
            onClick={ startLogin }
            >Login</button>
        </div>
    </div>
);

const mapDispatchToProps = ( dispatch ) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
