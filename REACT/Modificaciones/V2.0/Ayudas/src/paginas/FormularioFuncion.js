import React, { useState } from "react";

function FormunlarioFuncion (){

    const [formData, setFormData] = useState(
        {
            nombre: '',
            direccion: '',
            categoria: 'Seleccione Categoria',
            provincia: 'Seleccione Provincia'
        }
    );

    const manejoBoton = (e) => {
        e.preventDefault();
        alert(formData.nombre + "\n" + formData.direccion + "\n" + formData.categoria + "\n" + formData.provincia);
        setFormData(
            {
                nombre: '',
                direccion: '',
                categoria: 'Seleccione Categoria',
                provincia: 'Seleccione Provincia'
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
                            <label htmlFor="direccion"> Direccion </label>
                        </td>
                        <td>
                            <input  type = "text"
                                    id = "direccion"
                                    name = "direccion"
                                    value = {formData.direccion}
                                    onChange = {manejoDatos}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="categoria"> Categoria </label>
                        </td>
                        <td>
                            <select id = "categoria"
                                    name = "categoria"
                                    value = {formData.categoria}
                                    onChange = {manejoDatos}>
                                <option value = "Selecciona una Categoria" disable> Selecciona una Categoria</option> 
                                <option value = "Categoria A"> Categoria A</option>
                                <option value = "Categoria B"> Categoria B</option>
                                <option value = "Categoria C"> Categoria C</option>
                                <option value = "Categoria D"> Categoria D</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="provincia"> Provincia </label>
                        </td>
                        <td>
                            <select id = "provincia"
                                    name = "provincia"
                                    value = {formData.provincia}
                                    onChange = {manejoDatos}>
                                <option value = "Selecciona una Provincia" disable> Selecciona una Provincia</option> 
                                <option value = "Provincia A"> Provincia A</option>
                                <option value = "Provincia B"> Provincia B</option>
                                <option value = "Provincia C"> Provincia C</option>
                                <option value = "Provincia D"> Provincia D</option>
                            </select>
                        </td>                        
                    </tr>
                </table>
                <button style = {botonStyle} type="submit"> Enviar Datos</button>
            </form>
        </div>
    );
}

export default FormunlarioFuncion;