import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const AgregarImagenAReclamo = () => {
  const [numero, setNumero] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipo, setTipo] = useState('');
  const [documento, setDocumento] = useState('');

  const handleAgregarImagenAReclamo = async () => {
    // Validar que todos los campos estén completos
    if (!numero || !direccion || !tipo || !documento) {
      alert('Todos los campos son obligatorios');
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
        console.log('Imagen agregada al reclamo exitosamente');
      } else {
        // La solicitud falló
        console.error('Error al agregar imagen al reclamo');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Agregar Imagen a Reclamo</h2>
      <form className="d-flex flex-column align-items-center">
        <div className="form-group">
          <label>Número de Reclamo:</label>
          <input type="text" className="form-control" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Dirección de la Imagen:</label>
          <input type="text" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Tipo de Imagen:</label>
          <input type="text" className="form-control" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Documento:</label>
          <input type="text" className="form-control" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary mb-3" onClick={handleAgregarImagenAReclamo}>
          Agregar Imagen a Reclamo
        </button>
      </form>
    </div>
  );
};

export default AgregarImagenAReclamo;