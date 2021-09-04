import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => (
    <div>
        {gastos.map(gasto => (<Gasto />))}
    </div>
)
 
export default Listado;