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

 

// ... (importaciones anteriores)

// ... (importaciones anteriores)

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (userType) => {
    setUserType(userType);
  };

  const renderAdminContent = () => {
    return (
      <div className="container ">
        <h1 className="mb-4">Bienvenido admin</h1>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'agregarPersona' ? 'active' : ''}`}
              id="pills-agregarPersona-tab"
              data-toggle="pill"
              href="#pills-agregarPersona"
              role="tab"
              onClick={() => setView('agregarPersona')}
            >
              Agregar Persona
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'eliminarPersona' ? 'active' : ''}`}
              id="pills-eliminarPersona-tab"
              data-toggle="pill"
              href="#pills-eliminarPersona"
              role="tab"
              onClick={() => setView('eliminarPersona')}
            >
              Eliminar Persona
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'agregarInquilinoUnidad' ? 'active' : ''}`}
              id="pills-agregarInquilinoUnidad-tab"
              data-toggle="pill"
              href="#pills-agregarInquilinoUnidad"
              role="tab"
              onClick={() => setView('agregarInquilinoUnidad')}
            >
              Agregar Inquilino a Unidad
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'alquilarUnidad' ? 'active' : ''}`}
              id="pills-alquilarUnidad-tab"
              data-toggle="pill"
              href="#pills-alquilarUnidad"
              role="tab"
              onClick={() => setView('alquilarUnidad')}
            >
              Alquilar Unidad
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'buscarImagenesPorNumeroReclamo' ? 'active' : ''}`}
              id="pills-buscarImagenesPorNumeroReclamo-tab"
              data-toggle="pill"
              href="#pills-buscarImagenesPorNumeroReclamo"
              role="tab"
              onClick={() => setView('buscarImagenesPorNumeroReclamo')}
            >
              Buscar Imágenes por Número de Reclamo
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'cambiarEstadoReclamo' ? 'active' : ''}`}
              id="pills-cambiarEstadoReclamo-tab"
              data-toggle="pill"
              href="#pills-cambiarEstadoReclamo"
              role="tab"
              onClick={() => setView('cambiarEstadoReclamo')}
            >
              Cambiar Estado de Reclamo
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'dueniosPorEdificio' ? 'active' : ''}`}
              id="pills-dueniosPorEdificio-tab"
              data-toggle="pill"
              href="#pills-dueniosPorEdificio"
              role="tab"
              onClick={() => setView('dueniosPorEdificio')}
            >
              Dueños por Edificio
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'dueniosPorUnidad' ? 'active' : ''}`}
              id="pills-dueniosPorUnidad-tab"
              data-toggle="pill"
              href="#pills-dueniosPorUnidad"
              role="tab"
              onClick={() => setView('dueniosPorUnidad')}
            >
              Dueños por Unidad
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'edificios' ? 'active' : ''}`}
              id="pills-edificios-tab"
              data-toggle="pill"
              href="#pills-edificios"
              role="tab"
              onClick={() => setView('edificios')}
            >
              Edificios
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'habilitadosPorEdificio' ? 'active' : ''}`}
              id="pills-habilitadosPorEdificio-tab"
              data-toggle="pill"
              href="#pills-habilitadosPorEdificio"
              role="tab"
              onClick={() => setView('habilitadosPorEdificio')}
            >
              Habilitados por Edificio
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'habitantesPorEdificio' ? 'active' : ''}`}
              id="pills-habitantesPorEdificio-tab"
              data-toggle="pill"
              href="#pills-habitantesPorEdificio"
              role="tab"
              onClick={() => setView('habitantesPorEdificio')}
            >
              Habitantes por Edificio
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'habitarUnidad' ? 'active' : ''}`}
              id="pills-habitarUnidad-tab"
              data-toggle="pill"
              href="#pills-habitarUnidad"
              role="tab"
              onClick={() => setView('habitarUnidad')}
            >
              Habitar Unidad
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'reclamosPorEdificio' ? 'active' : ''}`}
              id="pills-reclamosPorEdificio-tab"
              data-toggle="pill"
              href="#pills-reclamosPorEdificio"
              role="tab"
              onClick={() => setView('reclamosPorEdificio')}
            >
              Reclamos por Edificio
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'reclamosPorNumero' ? 'active' : ''}`}
              id="pills-reclamosPorNumero-tab"
              data-toggle="pill"
              href="#pills-reclamosPorNumero"
              role="tab"
              onClick={() => setView('reclamosPorNumero')}
            >
              Reclamos por Número
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'reclamosPorPersona' ? 'active' : ''}`}
              id="pills-reclamosPorPersona-tab"
              data-toggle="pill"
              href="#pills-reclamosPorPersona"
              role="tab"
              onClick={() => setView('reclamosPorPersona')}
            >
              Reclamos por Persona
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'reclamosPorUnidad' ? 'active' : ''}`}
              id="pills-reclamosPorUnidad-tab"
              data-toggle="pill"
              href="#pills-reclamosPorUnidad"
              role="tab"
              onClick={() => setView('reclamosPorUnidad')}
            >
              Reclamos por Unidad
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'transferirUnidad' ? 'active' : ''}`}
              id="pills-transferirUnidad-tab"
              data-toggle="pill"
              href="#pills-transferirUnidad"
              role="tab"
              onClick={() => setView('transferirUnidad')}
            >
              Transferir Unidad
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'unidadesPorEdificio' ? 'active' : ''}`}
              id="pills-unidadesPorEdificio-tab"
              data-toggle="pill"
              href="#pills-unidadesPorEdificio"
              role="tab"
              onClick={() => setView('unidadesPorEdificio')}
            >
              Unidades por Edificio
            </a>
          </li>

          
          {/* Agrega más opciones según tus necesidades */}
        </ul>
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

          {/* Agrega más paneles según las opciones */}
        </div>
        {/* Renderiza otros componentes según la opción seleccionada */}
      </div>
    );
  };

  const renderNormalUserContent = () => {
    return (
      <div className="container ">
        <h1>Bienvenido usuario normal</h1>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'agregarReclamo' ? 'active' : ''}`}
              id="pills-agregarReclamo-tab"
              data-toggle="pill"
              href="#pills-agregarReclamo"
              role="tab"
              onClick={() => setView('agregarReclamo')}
            >
              Agregar Reclamo
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'verMisReclamos' ? 'active' : ''}`}
              id="pills-verMisReclamos-tab"
              data-toggle="pill"
              href="#pills-verMisReclamos"
              role="tab"
              onClick={() => setView('verMisReclamos')}
            >
              Ver Mis Reclamos
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentView === 'agregarImagenReclamo' ? 'active' : ''}`}
              id="pills-agregarImagenReclamo-tab"
              data-toggle="pill"
              href="#pills-agregarImagenReclamo"
              role="tab"
              onClick={() => setView('agregarImagenReclamo')}
            >
              Agregar Imagen a Reclamo
            </a>
          </li>
          {/* Agrega más opciones según tus necesidades */}
        </ul>
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
          {/* Agrega más paneles según las opciones */}
        </div>
      </div>
    );
  };

  const [currentView, setView] = useState('');

  const handleLogout = () => {
    setUserType(null);
    // Recargar la página
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