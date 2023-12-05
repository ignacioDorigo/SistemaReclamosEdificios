// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState('');

  const handleCheckboxChange = () => {
    setAdmin(!admin);
  };

  const handleSubmit = () => {
    const url = `http://localhost:8080/inicio/login/${encodeURIComponent(mail)}/${encodeURIComponent(password)}/${admin ? 1 : 0}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          if (admin) {
            onLogin('admin');
          } else {
            onLogin('normal');
          }
        } else {
          setMessage('Datos incorrectos');
        }
      })
      .catch(error => {
        console.error('Error en la llamada a la API:', error);
        setMessage('Error en la llamada a la API');
      });
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <div className="form-group">
        <label htmlFor="mail">Correo electrónico:</label>
        <input type="text" id="mail" value={mail} onChange={e => setMail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <div className="form-group checkbox-group">
        <input type="checkbox" id="adminCheckbox" checked={admin} onChange={handleCheckboxChange} />
        <label htmlFor="adminCheckbox">Sos admin?</label>
      </div>

      <button className="login-button" onClick={handleSubmit}>
        Iniciar sesión
      </button>

      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default Login;
