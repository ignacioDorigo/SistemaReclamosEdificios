import React, { useState } from 'react';

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
    <div>
      <label htmlFor="mail">Correo electrónico:</label>
      <input type="text" id="mail" value={mail} onChange={e => setMail(e.target.value)} />

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />

      <label>
        Admin:
        <input type="checkbox" checked={admin} onChange={handleCheckboxChange} />
      </label>

      <button onClick={handleSubmit}>Iniciar sesión</button>

      <p>{message}</p>
    </div>
  );
};

export default Login;