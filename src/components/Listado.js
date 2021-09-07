import React from 'react';
import PropTypes from 'prop-types';
import Gasto from './Gasto';
import CustomScroll from 'react-custom-scroll';

const Listado = ({gastos}) => (
    <div>
        <h2>Listado</h2>
        <div className="gastos-realizados">
            {gastos.map(gasto => (<Gasto key={gasto.id} gasto={gasto}/>))}
        </div>
    </div>
)

Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
}
export default Listado;