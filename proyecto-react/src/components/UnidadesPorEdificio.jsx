import React, { useState, useEffect } from 'react';

function UnidadesPorEdificio() {
  const [unidadesPorEdificio, setUnidadesPorEdificio] = useState([]);
  const [edificioId, setEdificioId] = useState('1'); // Cambiado a string para evitar problemas al no permitir borrar

  useEffect(() => {
    fetch(`http://localhost:8080/edificios/listarUnidadesPorEdificio/${edificioId}`)
      .then((response) => response.json())
      .then((data) => setUnidadesPorEdificio(data))
      .catch((error) => console.error('Error fetching edificios:', error));
  }, [edificioId]);

  const handleEdificioIdChange = (event) => {
    // Asegurarse de que solo se ingresen números
    const numericValue = event.target.value.replace(/\D/g, '');
    setEdificioId(numericValue);
  };

  return (
    <div className="container">
      <div className="card text-center">

        <div className="card-header">
            GESTION DE UNIDADES POR EDIFICIO
        </div>

        <div className="card-body">
          <label>
            Ingrese el número del edificio:
            <input
              type="text"  // Cambiado a 'text' para evitar que se borre
              value={edificioId}
              onChange={handleEdificioIdChange}
            />
          </label>
          <button onClick={() => setEdificioId(edificioId)}>Buscar</button>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Identificador</th>
                <th scope="col">Piso</th>
                <th scope="col">Numero</th>
                <th scope="col">Habitado</th>
                <th scope="col">Codigo Edificio</th>
              </tr>
            </thead>
            <tbody>
                {Array.isArray(unidadesPorEdificio) && unidadesPorEdificio.length > 0 ? (
                    unidadesPorEdificio.map((val, key) => (
                    <tr key={val.codigoEdificio}>
                        <td>{val.id}</td>
                        <td>{val.piso}</td>
                        <td>{val.numero}</td>
                        <td>{val.habitado ? 'Habitado' : 'Deshabitado'}</td>
                        <td>{val.edificio.codigo}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="5">No hay datos disponibles</td>
                    </tr>
                )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default UnidadesPorEdificio;