import React, { useState } from 'react';

function AgregarReclamo() {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la solicitud POST
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
          throw new Error('Error al agregar reclamo');
        }
      })
      .then(() => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Reclamo agregado correctamente');
        // Puedes realizar alguna acción adicional después de agregar el reclamo
      })
      .catch(error => console.error('Error al agregar reclamo:', error));
  };

  return (
    <div className="container mt-4">
      <h2>Agregar Reclamo</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="codigoInput" className="form-label">Codigo:</label>
          <input
            type="text"
            className="form-control"
            id="codigoInput"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pisoInput" className="form-label">Piso:</label>
          <input
            type="text"
            className="form-control"
            id="pisoInput"
            value={piso}
            onChange={(e) => setPiso(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numeroInput" className="form-label">Numero:</label>
          <input
            type="text"
            className="form-control"
            id="numeroInput"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="documentoInput" className="form-label">Documento:</label>
          <input
            type="text"
            className="form-control"
            id="documentoInput"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ubicacionInput" className="form-label">Ubicacion:</label>
          <input
            type="text"
            className="form-control"
            id="ubicacionInput"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcionInput" className="form-label">Descripcion:</label>
          <input
            type="text"
            className="form-control"
            id="descripcionInput"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar Reclamo</button>
      </form>
    </div>
  );
}

export default AgregarReclamo;