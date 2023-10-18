import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../estilos.css'

function Login(){
        const [formData, setFormData] = useState(
            {
                nombre_form: '',
                contraseña_form: '',
            }
        );
    
        const manejoBoton = (e) => {
            e.preventDefault();
            alert(formData.nombre_form + "\n" + formData.contraseña_form);
            setFormData(
                {
                    nombre_form: '',
                    contraseña_form: ''
                }
            );
        }
    
        const manejoDatos = (e) => {
            const { name , value } = e.target;
            setFormData(
                {
                    ...formData, 
                    [name]: value,
                }
            );
        };

    
    
        return (
            <div className="entorno_form">
                <div className="container_login-register">
                <h1 className='login-register'>LOGIN</h1>
                    <form onSubmit={manejoBoton}>
                        <table className="form_login">
                            <tr>
                                <td>
                                    <input  className="input_username"
                                            type = "text"
                                            id = "nombre_form"
                                            name = "nombre_form"
                                            placeholder="Username"
                                            value = {formData.nombre_form}
                                            onChange = {manejoDatos}>
                                    </input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input  className="input_password"
                                            type = "password"
                                            id = "contraseña_form"
                                            name = "contraseña_form"
                                            placeholder='Password'
                                            value = {formData.contraseña_form}
                                            onChange = {manejoDatos}>
                                    </input>
                                </td>
                            </tr>
                            <br/>
                            <br/>
                            <tr>
                                <td>
                                    <button className="boton_login_register" type="submit"> 
                                        <NavLink to='/home_page'>
                                            Login
                                        </NavLink> 
                                    </button>
                                </td>
                            </tr>
                            <br/>
                            <tr>
                                <td>
                                    <button className="boton_login_register" type="submit"> 
                                        <NavLink to='/register'>
                                            Register
                                        </NavLink>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
    )
}


export default Login;