import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdminChange = () => {
    setIsAdmin(!isAdmin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/inicio/login/${email}/${password}/${isAdmin ? 1 : 0}`);

      if (response.ok) {
        const data = await response.json();
        // Aquí puedes realizar acciones como redirigir a otra página
        console.log('Inicio de sesión exitoso:', data);

        // Actualizar estados para indicar que el usuario ha iniciado sesión
        setIsLoggedIn(true);
      } else {
        const errorData = await response.json();
        console.error('Error al iniciar sesión:', errorData.message);
      }
    } catch (error) {
      console.error('Error al autenticar:', error.message);
    }
  };

  // Renderizar el diseño correspondiente en función del estado de inicio de sesión y administrador
  return (
    <div>
      {isLoggedIn && isAdmin ? (
        <div>
          <h1>¡Bienvenido, Administrador!</h1>
          {/* Renderizar el diseño del administrador aquí */}
        </div>
      ) : isLoggedIn ? (
        <div>
          <h1>¡Bienvenido, Usuario Normal!</h1>
          {/* Renderizar el diseño del usuario normal aquí */}
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Correo Electrónico:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
              Contraseña:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <label>
              <input type="checkbox" checked={isAdmin} onChange={handleAdminChange} />
              ¿Es Administrador?
            </label>
            <br />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
