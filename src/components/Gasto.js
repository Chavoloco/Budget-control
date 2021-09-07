import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
    <li className="gastos">
        <p>{gasto.nombre}
        <span className="gasto">${Math.abs(gasto.cantidad)}</span>
        </p>
    </li>
)

Gasto.proptype = {
    gasto: PropTypes.object.isRequired,
}
export default Gasto;