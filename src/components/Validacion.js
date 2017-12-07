import React from 'react';

const Validacion = (props) => {
    const evaluacionTexto = props.largoTexto > 5 ? 'El largo del texto es satisfactorio' : 'El texto es demasiado corto';
    return (
        <div>
            <p>Ha escrito {props.largoTexto} letras. {evaluacionTexto}.</p>
        </div>
    ); 
}

export default Validacion;