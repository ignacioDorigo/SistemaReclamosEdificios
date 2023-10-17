import React, { useState } from "react";

function Register(){
        const [formData, setFormData] = useState(
            {
                nombre: '',
                contraseña: '',
            }
        );
    
        const manejoBoton = (e) => {
            e.preventDefault();
            alert(formData.nombre + "\n" + formData.contraseña);
            setFormData(
                {
                    nombre: '',
                    contraseña: ''
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
    
        const tablaStyle ={
            backgroundColor:'#44B9B7',
            border: '1px solid #ccc',
            padding: '10px',
        };
    
        const botonStyle = {
            width: '200px',
            border: '2px solid #ccc',
            padding: '10px',
            textAlign: 'center' 
        };
    
        return (
            <div>
                <h1>Formulario de Carga - Funcion</h1>
                <form onSubmit={manejoBoton}>
                    <table style = {tablaStyle}>
                        <tr>
                            <td>
                                <label htmlFor="nombre"> Nombre </label>
                            </td>
                            <td>
                                <input  type = "text"
                                        id = "nombre"
                                        name = "nombre"
                                        value = {formData.nombre}
                                        onChange = {manejoDatos}>
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="contraseña"> Contraseña </label>
                            </td>
                            <td>
                                <input  type = "password"
                                        id = "contraseña"
                                        name = "contraseña"
                                        value = {formData.contraseña}
                                        onChange = {manejoDatos}
                                        pattern="^(?=.*\d)(?=.*[!@#$%^&*.])(?=.*[a-zA-Z]).{8,}$"
                                        title="La contraseña debe contener al menos 8 caracteres, incluyendo al menos un número, un carácter especial (!@#$%^&*), y una letra mayúscula o minúscula.">
                                </input>
                            </td>
                        </tr>
                    </table>
                    <button style = {botonStyle} type="submit"> Enviar Datos</button>
                </form>
            </div>
    )
}

export default Register;