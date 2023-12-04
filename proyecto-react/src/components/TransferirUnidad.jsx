import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const TransferirUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');

  const handleTransferirUnidad = async () => {
    try {
      const response = await fetch('http://localhost:8080/unidades/transferirUnidad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`,
      });

      if (response.ok) {
        // La solicitud fue exitosa
        console.log('Unidad transferida exitosamente');
      } else {
        // La solicitud falló
        console.error('Error al transferir la unidad');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Transferir Unidad</h2>
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
          <label>Documento:</label>
          <input type="text" className="form-control" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleTransferirUnidad}>
          Transferir Unidad
        </button>
      </form>
    </div>
  );
};

export default TransferirUnidad;