/* Agregar funciones de acceder a la main_pag 
<img src={logo} className="App-logo" alt="logo" /> */

import React, {useState} from 'react';
import './styles-login-register.css';

function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

    return(
        <form>
            <div className='background-form'>
                <div className="container">
                    <div className="container_login-register">
                        <h1 className='login-register'>LOGIN</h1>
                        <br/>
                        <input 
                            type="text" 
                            id="miCampoLogin" 
                            name="miCampoLogin" 
                            placeholder="Username"
                        />
                        <br/>
                        <br/>
                        <br/>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="miCampoPassword"
                            name="miCampoPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="button" onClick={handleTogglePassword}>
                            {showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                        </button>
                        <br/>
                        <br/>
                        <br/>
                        <button className='button_login-register'>
                            LOGIN
                        </button>
                        <br/>
                        <br/>
                        <button className='button_login-register'>
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;