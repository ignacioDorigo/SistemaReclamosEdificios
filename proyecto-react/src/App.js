
import './App.css';
import React, { useState } from 'react';

import Edificios from './components/Edificios';
import Login from './components/Login';
import AgregarPersona from './components/AgregarPersona'
import UnidadesPorEdificio from './components/UnidadesPorEdificio';
import HabilitadosPorEdificio from './components/HabilitadosPorEdificio';
import DueniosPorEdificio from './components/DueniosPorEdificio';
import HabitantesPorEdificio from './components/HabitantesPorEdificio';
import DueniosPorUnidad from './components/DueniosPorUnidad';
import ReclamosPorEdificio from './components/ReclamosPorEdificio';
import ReclamosPorUnidad from './components/ReclamosPorUnidad';
import ReclamosPorNumero from './components/ReclamosPorNumero';
import ReclamosPorPersona from './components/ReclamosPorPersona';
import AgregarReclamo from './components/AgregarReclamo';
import EliminarPersona from './components/EliminarPersona';
import CambiarEstadoReclamo from './components/CambiarEstadoReclamo';
import TransferirUnidad from './components/TransferirUnidad';
import AgregarInquilinoUnidad from './components/AgregarInquilinoUnidad';
import AlquilarUnidad from './components/AlquilarUnidad';
import HabitarUnidad from './components/HabitarUnidad';
import BuscarImagenesPorNumeroReclamo from './components/BuscarImagenesPorNumeroReclamo';
import AgregarImagenAReclamo from './components/AgregarImagenReclamo';

 

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (userType) => {
    setUserType(userType);
  };

  return (
    <div className='App'>
      {userType === null ? (
        <Login onLogin={handleLogin} />
      ) : userType === 'admin' ? (
        <div>
          <h1>Bienvenido admin</h1>
          <AgregarPersona />
        </div>
      ) : (
        <div>
          <h1>Bienvenido usuario normal</h1>
          <AgregarReclamo />
        </div>
      )}
    </div>
  );
};

export default App;