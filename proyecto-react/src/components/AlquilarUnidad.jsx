import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AlquilarUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');

  const handleAlquilarUnidad = async () => {
    // Validar que todos los campos estén completos
    if (!codigo || !piso || !numero || !documento) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/unidades/alquilarUnidad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`,
      });

      if (response.ok) {
        // La solicitud fue exitosa
        Swal.fire({
          title: '<strong>Alquiler Exitoso</strong>',
          html: '<i>Unidad alquilada exitosamente</i>',
          icon: 'success',
          timer: 2000
        });
      } else {
        // La solicitud falló
        Swal.fire({
          title: 'Error',
          text: 'Hubo un error al alquilar la unidad',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Mostrar un mensaje de error genérico
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al procesar la solicitud',
        icon: 'error',
      });
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <strong>ALQUILAR UNIDAD</strong>
        </div>

        <div className="card-body">

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Código</span>
            <input type="text" class="form-control" placeholder="Código" aria-label="Código" aria-describedby="addon-wrapping" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Piso</span>
            <input type="text" class="form-control" placeholder="Piso" aria-label="Piso" aria-describedby="addon-wrapping" value={piso} onChange={(e) => setPiso(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Número</span>
            <input type="text" class="form-control" placeholder="Número" aria-label="Número" aria-describedby="addon-wrapping" value={numero} onChange={(e) => setNumero(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Documento del Inquilino</span>
            <input type="text" class="form-control" placeholder="Documento del Inquilino" aria-label="Documento del Inquilino" aria-describedby="addon-wrapping" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
          </div>
          
        </div>

        <div class="card-footer text-muted">
          <button type="button" className="btn btn-primary" onClick={handleAlquilarUnidad}>
            Alquilar Unidad
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlquilarUnidad;