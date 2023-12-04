import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const HabitarUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');

  const handleHabitarUnidad = async () => {
    // Validar que todos los campos estén completos
    if (!codigo || !piso || !numero) {
      alert('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/unidades/habitarUnidad/${codigo}/${piso}/${numero}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // La solicitud fue exitosa
        console.log('Unidad habitada exitosamente');
      } else {
        // La solicitud falló
        console.error('Error al habitar la unidad');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Habitar Unidad</h2>
      <form className="d-flex flex-column align-items-center">
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
        <button type="button" className="btn btn-success mb-3" onClick={handleHabitarUnidad}>
          Habitar Unidad
        </button>
      </form>
    </div>
  );
};

export default HabitarUnidad;