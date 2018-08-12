import React from 'react';
import { Link } from 'react-router-dom';

const PaginaNaoEncontrada = () => (
    <div>
        Error 404! Page not Found! <Link to="/">Página Inicial</Link>
    </div>
);

export default PaginaNaoEncontrada;