import React, { useState } from 'react'
import { useEffect } from 'react';

function ReclamosPorPersona() {

  const [reclamosPorPersona, setReclamosPorPersona] = useState([]); 
  const [documento, setEdificioNumero] = useState(''); 

  useEffect(() => {
    fetch(`http://localhost:8080/reclamos/reclamosPorPersona/${documento}`)
        .then(response => response.json())
        .then(data => setReclamosPorPersona(data))
        .catch(error => console.error('Error fetching edificios:', error));
}, [documento]);

const handleEdificioNumeroChange = (e) => {
  setEdificioNumero(e.target.value);
};

return (
  <div className="container">
      <div className="card text-center">
          <div className="card-header">
              RECLAMOS POR PERSONA
          </div>
          <div className="card-body">
            <div class="input-group flex-nowrap mb-2">
                <span class="input-group-text" id="addon-wrapping">Número de Documento:</span>
                <input type="text" class="form-control" placeholder="Número de Documento" aria-label="Número de Documento" aria-describedby="addon-wrapping" id="edificioNumeroInput" value={documento} onChange={handleEdificioNumeroChange}/>
            </div>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th scope="col">Numero</th>
                          <th scope="col">Usuario</th>
                          <th scope="col">Edificio</th>
                          <th scope="col">Ubicacion</th>
                          <th scope="col">Descripcion</th>
                          <th scope="col">Unidad</th>
                          <th scope="col">Estado</th>
                      </tr>
                  </thead>
                  <tbody>
                      {Array.isArray(reclamosPorPersona) && reclamosPorPersona.length > 0 ? (
                          reclamosPorPersona.map((val, key) => (
                              <tr key={val.codigo}>
                                  <td>{val.numero}</td>
                                  <td>{val.usuario}</td>
                                  <td>{val.edificio}</td>
                                  <td>{val.ubicacion}</td>
                                  <td>{val.descripcion}</td>
                                  <td>{val.unidad}</td>
                                  <td>{val.estado}</td>
                              </tr>
                          )) 
                      ) : (
                          <tr>
                              <td colSpan="7">No hay reclamos para esta persona</td>
                          </tr>
                      )}
                  </tbody>
              </table>
          </div>
      </div>
  </div>
);
}

export default ReclamosPorPersona