import React, { useState } from 'react';

import Swal from 'sweetalert2'


const AgregarInquilinoUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');

  const handleAgregarInquilinoUnidad = async () => {
    try {
      const response = await fetch('http://localhost:8080/unidades/agregarInquilinoUnidad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`,
      });

      if (response.ok) {
        // La solicitud fue exitosa
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>El inquilino fue agregado con exito</i>',
          icon: 'success',
          timer: 2000
        })
      } else {
        // La solicitud falló
        Swal.fire({
          title: "Oops...",
          html: "No se pudo agregar!",
          icon: "error",
          timer: 2000
        });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Inquilino a la Unidad</h2>
      <form>
        <div className="form-group">
          <label>Código:</label>
          <input type="text" className="form-control" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Piso:</label>
          <input type="text" className="form-control" value={piso} onChange={(e) => setPiso(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Número:</label>
          <input type="text" className="form-control" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Documento del Inquilino:</label>
          <input
            type="text"
            className="form-control"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
        </div>
        <br/>
        <button type="button" className="btn btn-primary" onClick={handleAgregarInquilinoUnidad}>
          Agregar Inquilino a la Unidad
        </button>
      </form>
    </div>
  );
};

export default AgregarInquilinoUnidad;