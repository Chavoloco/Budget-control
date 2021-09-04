import React, {useState} from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actualizarPregunta] = useState(true)

  

  return (
    <div className="container">
      <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">
        {mostrarPregunta ?
        <Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante}/>
         :
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">Listado</div>
          <Listado />
          <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
        </div>
         }
      </div>
    </div>
  );
}

export default App;
