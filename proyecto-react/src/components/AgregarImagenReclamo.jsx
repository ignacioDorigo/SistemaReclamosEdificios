import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AgregarImagenAReclamo = () => {
  const [numero, setNumero] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipo, setTipo] = useState('');
  const [documento, setDocumento] = useState('');

  const handleAgregarImagenAReclamo = async () => {
    // Validar que todos los campos estén completos
    if (!numero || !direccion || !tipo || !documento) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/reclamos/agregarImagenAReclamo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `numero=${numero}&direccion=${direccion}&tipo=${tipo}&documento=${documento}`,
      });

      if (response.ok) {
        // La solicitud fue exitosa
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>La Imagen fue agregada con éxito</i>',
          icon: 'success',
          timer: 2000
        });
      } else {
        // La solicitud falló
        Swal.fire({
          title: 'Error',
          text: 'Por favor, verificar todos los campos.',
          icon: 'error',
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
          GESTION DE EDIFICIOS
        </div>

        <div className="card-body mb-2">
          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Número de Reclamo</span>
            <input type="text" class="form-control" placeholder="Número de Reclamo" aria-label="Número de Reclamo" aria-describedby="addon-wrapping" value={numero} onChange={(e) => setNumero(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Dirección de la Imagen</span>
            <input type="text" class="form-control" placeholder="Dirección de la Imagen" aria-label="Dirección de la Imagen" aria-describedby="addon-wrapping" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Tipo de Imagen</span>
            <input type="text" class="form-control" placeholder="Tipo de Imagen" aria-label="Tipo de Imagen" aria-describedby="addon-wrapping" value={tipo} onChange={(e) => setTipo(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Documento</span>
            <input type="text" class="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="addon-wrapping" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
          </div>
        </div>

        <div class="card-footer text-muted ">
          <button type="button" className="btn btn-primary mb-3" onClick={handleAgregarImagenAReclamo}>
              Agregar Imagen a Reclamo
            </button>
        </div>
      </div>
    </div>
  );
};

export default AgregarImagenAReclamo;
