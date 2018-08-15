import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PaginaInicial from '../components/PaginaInicial';
import PaginaNaoEncontrada from '../components/PaginaNaoEncontrada';
import PaginaLista from '../components/PaginaLista';
import PaginaAjuda from '../components/PaginaAjuda';
import PaginaContato from '../components/PaginaContato';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}> 
        <div>
            <Switch>
                <Route path="/" component={ LoginPage } exact={true}/>
                <PrivateRoute path="/inicio" component={ PaginaInicial } /> 
                <PrivateRoute path="/lista/:id" component={ PaginaLista } />
                <PrivateRoute path="/ajuda" component={ PaginaAjuda } />
                <PrivateRoute path="/contato" component={ PaginaContato } />
                <Route component={PaginaNaoEncontrada} />
            </Switch>
        </div>
    </Router> 
);

export default AppRouter;

