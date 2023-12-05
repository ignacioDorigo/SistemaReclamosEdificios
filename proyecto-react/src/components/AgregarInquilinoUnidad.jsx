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
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <strong>AGREGAR INQUILINO A LA UNIDAD</strong>
        </div>

        <div className="card-body">

          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Código</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Piso</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={piso} onChange={(e) => setPiso(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Número</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={numero} onChange={(e) => setNumero(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Documento del Inquilino</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
          </div>

        </div>
        
        <div class="card-footer text-muted">
          <button type="button" className="btn btn-primary" onClick={handleAgregarInquilinoUnidad}>
            Agregar Inquilino a la Unidad
          </button>
        </div>
        

      </div>
    </div>
  );
};

export default AgregarInquilinoUnidad;