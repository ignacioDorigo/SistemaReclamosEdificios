import React, { useState } from 'react';

const AlquilarUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');

  const handleAlquilarUnidad = async () => {
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
        console.log('Unidad alquilada exitosamente');
      } else {
        // La solicitud falló
        console.error('Error al alquilar la unidad');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Alquilar Unidad</h2>
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
        <button type="button" className="btn btn-primary" onClick={handleAlquilarUnidad}>
          Alquilar Unidad
        </button>
      </form>
    </div>
  );
};

export default AlquilarUnidad;