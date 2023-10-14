import React, {useState} from 'react';
import './styles-login-register.css'

function Register(){

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    };

    return(
        <form>
            <div className="container">
                <div className="container_login-register">
                    <h1 className='login-register'>REGISTER</h1>
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
                    <br/>
                    <div className="password-container">
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
                    </div>
                    <br/>
                    <br/>
                    <button className='button_login-register'>
                        REGISTER
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Register;