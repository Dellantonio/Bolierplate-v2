import React from 'react';

const PaginaLista = (props) => {
    return (
    <div>
        Pagina Lista com id: {props.match.params.id}
    </div>
    );
};

export default PaginaLista;