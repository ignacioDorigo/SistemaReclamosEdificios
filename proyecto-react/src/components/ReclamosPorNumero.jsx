import React, { useState, useEffect } from 'react';

function ReclamosPorNumero() {
  const [reclamosPorNumero, setReclamosPorNumero] = useState(null);
  const [numero, setNumeroReclamo] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/reclamos/reclamosPorNumero/${numero}`)
      .then(response => response.json())
      .then(data => setReclamosPorNumero(data))
      .catch(error => console.error('Error fetching reclamos:', error));
  }, [numero]);

  const handleEdificioNumeroChange = (e) => {
    setNumeroReclamo(e.target.value);
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          RECLAMOS POR NÚMERO
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="edificioNumeroInput" className="form-label">Número de Reclamo:</label>
            <input
              type="text"
              className="form-control"
              id="edificioNumeroInput"
              value={numero}
              onChange={handleEdificioNumeroChange}
            />
          </div>
          {reclamosPorNumero !== null ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Número</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Edificio</th>
                  <th scope="col">Ubicación</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Unidad</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {/* Renderizar la fila de datos aquí */}
                <tr key={reclamosPorNumero?.codigo}>
                  <td>{reclamosPorNumero?.numero}</td>
                  <td>{reclamosPorNumero?.usuario}</td>
                  <td>{reclamosPorNumero?.edificio}</td>
                  <td>{reclamosPorNumero?.ubicacion}</td>
                  <td>{reclamosPorNumero?.descripcion}</td>
                  <td>{reclamosPorNumero?.unidad}</td>
                  <td>{reclamosPorNumero?.estado}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>
              <p>{numero ? 'Datos no encontrados' : 'Ingresa un número de reclamo'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReclamosPorNumero;