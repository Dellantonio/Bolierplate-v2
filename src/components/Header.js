import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Almanaque do Mercado</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Início</NavLink>
        <NavLink to="/contato" activeClassName="is-active" >Contato</NavLink>
        <NavLink to="/ajuda" activeClassName="is-active" >Ajuda</NavLink>
    </header>
);

export default Header;
