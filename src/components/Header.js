import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="box-header">
            <h1>Almanaque do Mercado</h1>
            <div className="box-header__navlink">
                <NavLink to="/" activeClassName="is-active" exact={true} >Login Page</NavLink>
                <NavLink to="/inicio" activeClassName="is-active" >Início</NavLink>
                <NavLink to="/contato" activeClassName="is-active" >Contato</NavLink>
                <NavLink to="/ajuda" activeClassName="is-active" >Ajuda</NavLink>   
            </div>        
        </div>   
    </header>
);

export default Header;
