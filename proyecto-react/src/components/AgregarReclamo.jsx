import React, { useState } from 'react';
import Swal from 'sweetalert2';


function AgregarReclamo() {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!codigo || !piso || !numero || !documento || !ubicacion || !descripcion) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        icon: 'error',
      });
      return;
    }

    fetch('http://localhost:8080/reclamos/agregarReclamo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        codigo: codigo,
        piso: piso,
        numero: numero,
        documento: documento,
        ubicacion: ubicacion,
        descripcion: descripcion,
      }),
    })
      .then(response => {
        if (!response.ok) {
          Swal.fire({
            title: 'Error',
            text: `Hubo un error al agregar el reclamo`,
            icon: 'error',
          });
        }
      })
      .then(() => {
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>El Reclamo fue registrado con éxito</i>',
          icon: 'success',
          timer: 2000
        });
      })
      .catch(error => console.error('Error al agregar reclamo:', error));
  };

  return (
    <div className="container">
      <div className="card text-center">

        <div className="card-header">
          <strong>AGREGAR RECLAMO</strong>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Codigo de Edificio</span>
              <input type="text" class="form-control" placeholder="Codigo de Edificio" aria-label="Codigo" aria-describedby="addon-wrapping" id="codigoInput" value={codigo} onChange={(e) => setCodigo(e.target.value)}/>
            </div>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Piso</span>
              <input type="text" class="form-control" placeholder="Piso" aria-label="Piso" aria-describedby="addon-wrapping" id="pisoInput" value={piso} onChange={(e) => setPiso(e.target.value)}/>
            </div>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Numero</span>
              <input type="text" class="form-control" placeholder="Numero" aria-label="Numero" aria-describedby="addon-wrapping" id="numeroInput" value={numero} onChange={(e) => setNumero(e.target.value)}/>
            </div>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Documento</span>
              <input type="text" class="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="addon-wrapping" id="documentoInput" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
            </div>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Ubicacion Problema</span>
              <input type="text" class="form-control" placeholder="Ubicacion Problema" aria-label="Ubicacion Problema" aria-describedby="addon-wrapping" id="ubicacionInput" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}/>
            </div>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Descripcion</span>
              <input type="text" class="form-control" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="addon-wrapping" id="descripcionInput" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary">Agregar Reclamo</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgregarReclamo;
