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

  const renderAdminContent = () => {
    return (
      <div className="container ">
        <h1 className="mb-4">Bienvenido admin</h1>
          <div className="btn-group" role="group">
            <button
              type="button"
              className={`btn ${currentView === 'agregarPersona' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('agregarPersona')}
            >
              Agregar Persona
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'eliminarPersona' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('eliminarPersona')}
            >
              Eliminar Persona
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'agregarInquilinoUnidad' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('agregarInquilinoUnidad')}
            >
              Agregar Inquilino a Unidad
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'alquilarUnidad' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('alquilarUnidad')}
            >
              Alquilar Unidad
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'buscarImagenesPorNumeroReclamo' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('buscarImagenesPorNumeroReclamo')}
            >
              Buscar Imágenes por Número de Reclamo
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'cambiarEstadoReclamo' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('cambiarEstadoReclamo')}
            >
              Cambiar Estado de Reclamo
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'dueniosPorEdificio' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('dueniosPorEdificio')}
            >
              Dueños por Edificio
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'dueniosPorUnidad' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('dueniosPorUnidad')}
            >
              Dueños por Unidad
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'edificios' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('edificios')}
            >
              Edificios
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'habilitadosPorEdificio' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('habilitadosPorEdificio')}
            >
              Habilitados por Edificio
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'habitantesPorEdificio' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('habitantesPorEdificio')}
            >
              Habitantes por Edificio
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'habitarUnidad' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('habitarUnidad')}
            >
              Habitar Unidad
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'reclamosPorEdificio' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('reclamosPorEdificio')}
            >
              Reclamos por Edificio
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'reclamosPorNumero' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('reclamosPorNumero')}
            >
              Reclamos por Número
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'reclamosPorPersona' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('reclamosPorPersona')}
            >
              Reclamos por Persona
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'reclamosPorUnidad' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('reclamosPorUnidad')}
            >
              Reclamos por Unidad
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'transferirUnidad' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('transferirUnidad')}
            >
              Transferir Unidad
            </button>

            <button
              type="button"
              className={`btn ${currentView === 'unidadesPorEdificio' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setView('unidadesPorEdificio')}
            >
              Unidades por Edificio
            </button>

          </div>
          
        <div className="tab-content">
          <div
            className={`tab-pane fade ${currentView === 'agregarPersona' ? 'show active' : ''}`}
            id="pills-agregarPersona"
            role="tabpanel"
          >
            <AgregarPersona />
          </div>
          <div
            className={`tab-pane fade ${currentView === 'eliminarPersona' ? 'show active' : ''}`}
            id="pills-eliminarPersona"
            role="tabpanel"
          >
            <EliminarPersona />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'agregarInquilinoUnidad' ? 'show active' : ''}`}
            id="pills-agregarInquilinoUnidad"
            role="tabpanel"
          >
            <AgregarInquilinoUnidad />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'alquilarUnidad' ? 'show active' : ''}`}
            id="pills-alquilarUnidad"
            role="tabpanel"
          >
            <AlquilarUnidad />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'buscarImagenesPorNumeroReclamo' ? 'show active' : ''}`}
            id="pills-buscarImagenesPorNumeroReclamo"
            role="tabpanel"
          >
            <BuscarImagenesPorNumeroReclamo />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'cambiarEstadoReclamo' ? 'show active' : ''}`}
            id="pills-cambiarEstadoReclamo"
            role="tabpanel"
          >
            <CambiarEstadoReclamo />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'dueniosPorEdificio' ? 'show active' : ''}`}
            id="pills-dueniosPorEdificio"
            role="tabpanel"
          >
            <DueniosPorEdificio />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'dueniosPorUnidad' ? 'show active' : ''}`}
            id="pills-dueniosPorUnidad"
            role="tabpanel"
          >
            <DueniosPorUnidad />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'edificios' ? 'show active' : ''}`}
            id="pills-edificios"
            role="tabpanel"
          >
            <Edificios />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'habilitadosPorEdificio' ? 'show active' : ''}`}
            id="pills-habilitadosPorEdificio"
            role="tabpanel"
          >
            <HabilitadosPorEdificio />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'habitantesPorEdificio' ? 'show active' : ''}`}
            id="pills-habitantesPorEdificio"
            role="tabpanel"
          >
            <HabitantesPorEdificio />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'habitarUnidad' ? 'show active' : ''}`}
            id="pills-habitarUnidad"
            role="tabpanel"
          >
            <HabitarUnidad />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'reclamosPorEdificio' ? 'show active' : ''}`}
            id="pills-reclamosPorEdificio"
            role="tabpanel"
          >
            <ReclamosPorEdificio />
          </div>

          

          <div
            className={`tab-pane fade ${currentView === 'reclamosPorNumero' ? 'show active' : ''}`}
            id="pills-reclamosPorNumero"
            role="tabpanel"
          >
            <ReclamosPorNumero />
          </div>

          <div
            className={`tab-pane fade ${currentView === 'reclamosPorPersona' ? 'show active' : ''}`}
            id="pills-reclamosPorPersona"
            role="tabpanel"
          >
            <ReclamosPorPersona />
          </div>
          <div
            className={`tab-pane fade ${currentView === 'reclamosPorUnidad' ? 'show active' : ''}`}
            id="pills-reclamosPorUnidad"
            role="tabpanel"
          >
            <ReclamosPorUnidad />
          </div>
          <div
            className={`tab-pane fade ${currentView === 'transferirUnidad' ? 'show active' : ''}`}
            id="pills-transferirUnidad"
            role="tabpanel"
          >
            <TransferirUnidad />
          </div>
          <div
            className={`tab-pane fade ${currentView === 'unidadesPorEdificio' ? 'show active' : ''}`}
            id="pills-unidadesPorEdificio"
            role="tabpanel"
          >
            <UnidadesPorEdificio />
          </div>
        </div>
      </div>
    );
  };

  const renderNormalUserContent = () => {
    return (
      <div className="container ">
        <h1>Bienvenido usuario normal</h1>
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${currentView === 'agregarReclamo' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setView('agregarReclamo')}
          >
            Agregar Reclamo
          </button>

          <button
            type="button"
            className={`btn ${currentView === 'verMisReclamos' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setView('verMisReclamos')}
          >
            Ver Mis Reclamos
          </button>

          <button
            type="button"
            className={`btn ${currentView === 'agregarImagenReclamo' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setView('agregarImagenReclamo')}
          >
            Agregar Imagen a Reclamo
          </button>
        </div>
        <div className="tab-content">
          <div
            className={`tab-pane fade ${currentView === 'agregarReclamo' ? 'show active' : ''}`}
            id="pills-agregarReclamo"
            role="tabpanel"
          >
            <AgregarReclamo />
          </div>
          <div
            className={`tab-pane fade ${currentView === 'verMisReclamos' ? 'show active' : ''}`}
            id="pills-verMisReclamos"
            role="tabpanel"
          >
            <ReclamosPorPersona />
          </div>
          <div
            className={`tab-pane fade ${currentView === 'agregarImagenReclamo' ? 'show active' : ''}`}
            id="pills-agregarImagenReclamo"
            role="tabpanel"
          >
            <AgregarImagenAReclamo />
          </div>
        </div>
      </div>
    );
  };

  const [currentView, setView] = useState('');

  const handleLogout = () => {
    setUserType(null);
    window.location.reload();
  };

  return (
    <div className='App'>
      {userType === null ? (
        <Login onLogin={handleLogin} />
      ) : userType === 'admin' ? (
        <>
          {renderAdminContent()}
          <button className="btn btn-danger mt-3" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          {renderNormalUserContent()}
          <button className="btn btn-danger mt-3" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </>
      )}
    </div>
  );
}

export default App;