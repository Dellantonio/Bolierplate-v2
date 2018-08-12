import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import PaginaInicial from '../components/PaginaInicial';
import PaginaNaoEncontrada from '../components/PaginaNaoEncontrada';
import PaginaLista from '../components/PaginaLista';
import PaginaAjuda from '../components/PaginaAjuda';
import PaginaContato from '../components/PaginaContato';


const AppRouter = () => (
    <BrowserRouter> 
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ PaginaInicial } exact={true}/> 
            <Route path="/lista/:id" component={PaginaLista} />
            <Route path="/ajuda" component={PaginaAjuda} />
            <Route path="/contato" component={PaginaContato} />
            <Route component={PaginaNaoEncontrada} />
        </Switch>
    </div>
    </BrowserRouter> 
);

export default AppRouter;

