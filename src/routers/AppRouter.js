import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import PaginaInicial from '../components/PaginaInicial';
import PaginaNaoEncontrada from '../components/PaginaNaoEncontrada';
import PaginaLista from '../components/PaginaLista';
import PaginaAjuda from '../components/PaginaAjuda';
import PaginaContato from '../components/PaginaContato';
import LoginPage from '../components/LoginPage';


const AppRouter = () => (
    <BrowserRouter> 
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ LoginPage } exact={true}/>
            <Route path="/inicio" component={ PaginaInicial }/> 
            <Route path="/lista/:id" component={PaginaLista} />
            <Route path="/ajuda" component={PaginaAjuda} />
            <Route path="/contato" component={PaginaContato} />
            <Route component={PaginaNaoEncontrada} />
        </Switch>
    </div>
    </BrowserRouter> 
);

export default AppRouter;

