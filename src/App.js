import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamplogo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(numClicks - numClicks);
  };

  return (
    <div className="App">
      <div className='freecode-camp-logocontenedor'>
        <img
          className='freecode-camp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>

      <div className='contenedor-principal'>
        <Contador
          nroClicks={numClicks} />

        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
