import React, { useState } from 'react';

const Formulario = () => {

    const [nombre, guardarNombre] =useState('')
    const [cantidad, guardarCantidad] =useState()
    const [error, guardarError] = useState(false)

    const agregaGasto = e =>{
        e.preventDefault()
    }

    return ( 
        <form>
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
            onChange={e => guardarCantidad(e.target.value)}
            />
            </div>
            <input type="submit" className=""/>

        </form>
     );
}
 
export default Formulario;