import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    //definir states
    const [nombre, guardarNombre] =useState('')
    const [cantidad, guardarCantidad] =useState(0)
    const [error, guardarError] = useState(false)

    //cuando el user agregue un gasto
    const agregarGasto = e =>{
        e.preventDefault()

        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        //construccion de gasto
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        //retornar al padre
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //resetear formulario
        guardarNombre('')
        guardarCantidad(0)
    }

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agregue sus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupesto incorrecto"/>: null}
            <label>Nombre gasto</label>
            <div className="campo">
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <label>cantidad gasto</label>
            <div className="campo">
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(e.target.value)}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>

        </form>
     );
}

Formulario.popTypes = {
    guardarCrearGasto : PropTypes.func.isRequired,
    guardarGasto: PropTypes.func.isRequired,
}
export default Formulario;