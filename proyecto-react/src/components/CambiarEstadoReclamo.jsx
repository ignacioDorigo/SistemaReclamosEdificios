import React, { useState } from 'react';

function CambiarEstadoReclamo() {
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/reclamos/cambiarEstado?numero=${numero}&estado=${estado}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error al cambiar el estado del reclamo: ${errorData.message}`);
      }

      console.log('Estado del reclamo cambiado correctamente');
      // Puedes realizar alguna acción adicional después de cambiar el estado del reclamo si es necesario
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Cambiar Estado del Reclamo</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="numeroInput" className="form-label">Número del Reclamo:</label>
          <input
            type="text"
            className="form-control"
            id="numeroInput"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="estadoInput" className="form-label">Nuevo Estado:</label>
          <select
            className="form-select"
            id="estadoInput"
            value={estado}
            onChange={handleEstadoChange}
          >
            <option value="">Selecciona un estado</option>
            <option value="nuevo">Nuevo</option>
            <option value="abierto">Abierto</option>
            <option value="enProceso">En Proceso</option>
            <option value="desestimado">Desestimado</option>
            <option value="anulado">Anulado</option>
            <option value="terminado">Terminado</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Cambiar Estado del Reclamo</button>
      </form>
    </div>
  );
}

export default CambiarEstadoReclamo;