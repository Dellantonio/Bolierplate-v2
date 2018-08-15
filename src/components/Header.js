import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <header>
        <div className="box-header">
            <h1>Almanaque do Mercado</h1>
            <button onClick={ startLogout }>Logout</button>
            <div className="box-header__navlink">
                <NavLink to="/inicio" activeClassName="is-active" >Início</NavLink>
                <NavLink to="/contato" activeClassName="is-active" >Contato</NavLink>
                <NavLink to="/ajuda" activeClassName="is-active" >Ajuda</NavLink>   
            </div>        
        </div>   
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
