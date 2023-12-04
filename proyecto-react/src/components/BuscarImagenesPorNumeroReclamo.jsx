import React, { useState, useEffect } from 'react';

const BuscarImagenesPorNumeroReclamo = () => {
    const [imagenesPorReclamo, setImagenesPorReclamo] = useState([]);
    const [reclamoId, setReclamoId] = useState('1'); // Cambiado a string para evitar problemas al no permitir borrar
  
    useEffect(() => {
      fetch(`http://localhost:8080/imagenes/buscarImagenesPorNumeroReclamo/${reclamoId}`)
        .then((response) => response.json())
        .then((data) => setImagenesPorReclamo(data))
        .catch((error) => console.error('Error fetching edificios:', error));
    }, [reclamoId]);
  
    const handleEdificioIdChange = (event) => {
      // Asegurarse de que solo se ingresen números
      const numericValue = event.target.value.replace(/\D/g, '');
      setReclamoId(numericValue);
    };
  
    return (
      <div className="container">
        <div className="card text-center">
  
          <div className="card-header">
              BUSQUEDA DE IMAGENES POR RECLAMO
          </div>
  
          <div className="card-body">
            <label>
              Ingrese el número del edificio:
              <input
                type="text"  // Cambiado a 'text' para evitar que se borre
                value={reclamoId}
                onChange={handleEdificioIdChange}
              />
            </label>
            <button onClick={() => setReclamoId(reclamoId)}>Buscar</button>
  
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">idImagen</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Tipo</th>
               
                </tr>
              </thead>

<tbody>
  {Array.isArray(imagenesPorReclamo) && imagenesPorReclamo.length > 0 ? (
    imagenesPorReclamo.map((val, key) => (
      <tr key={val.reclamoId}>
        <td>{val.numero}</td>
        <td>
          {/* Envolver el contenido en un hipervínculo */}
          <a href={val.direccion} target="_blank" rel="noopener noreferrer">
            {val.direccion}
          </a>
        </td>
        <td>{val.tipo}</td>
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

export default BuscarImagenesPorNumeroReclamo;