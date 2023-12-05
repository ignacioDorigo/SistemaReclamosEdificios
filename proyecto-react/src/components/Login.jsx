// Login.js

import React, { useState } from 'react';
import './Login.css';
import Swal from 'sweetalert2';

const Login = ({ onLogin }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState('');

  const handleCheckboxChange = () => {
    setAdmin(!admin);
  };

  const handleSubmit = () => {
    // Validar campos vacíos
    if (mail.trim() === '' || password.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos',
        icon: 'error',
      });
      return; // Detener la ejecución si hay campos vacíos
    }

    const url = `http://localhost:8080/inicio/login/${encodeURIComponent(mail)}/${encodeURIComponent(password)}/${admin ? 1 : 0}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          if (admin) {
            Swal.fire({
              title: 'Inicio de Sesión Admin Exitoso',
              text: 'Datos Correctos',
              icon: 'success',
              timer: 2000,
            });
            onLogin('admin');
          } else {
            Swal.fire({
              title: 'Inicio de Sesión User Exitoso',
              text: 'Datos Correctos',
              icon: 'success',
              timer: 2000,
            });
            onLogin('normal');
          }
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Datos Incorrectos',
            icon: 'error',
          });
        }
      })
      .catch(error => {
        console.error('Error en la llamada a la API:', error);
        setMessage('Error en la llamada a la API');
      });
  };

  return (
    <div className="centrar-container">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>

        <div className="input-group flex-nowrap mb-2">
          <span className="input-group-text" id="addon-wrapping">
            Correo electrónico:
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico:"
            aria-describedby="addon-wrapping"
            id="mail"
            value={mail}
            onChange={e => setMail(e.target.value)}
          />
        </div>

        <div className="input-group flex-nowrap mb-2">
          <span className="input-group-text" id="addon-wrapping">
            Contraseña:
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-describedby="addon-wrapping"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="adminCheckbox"
            checked={admin}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            <strong>Sos admin?</strong>
          </label>
        </div>

        <button className="login-button" onClick={handleSubmit}>
          Iniciar sesión
        </button>

        {message && <p className="error-message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
