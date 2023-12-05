import React, { useState } from 'react';

const LiberarUnidad = () => {
  const [codigo, setCodigo] = useState(2);
  const [piso, setPiso] = useState('25');
  const [numero, setNumero] = useState('3');
 
  const handleClick = () => {
    // Construir la URL con los parámetros
    const url = `http://localhost:8080/unidades/liberarUnidad?codigo=${codigo}&piso=${piso}&numero=${numero}`;

    // Realizar la petición DELETE utilizando fetch
    fetch(url, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al liberar la unidad');
        }
        // Puedes manejar la respuesta si es necesario
        console.log('Unidad liberada con éxito');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <div className="card text-center">

        <div className="card-header">
          LIBERAR UNIDAD
        </div>

        <div className="card-body mb-2">

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Código Unidad:</span>
            <input type="number" class="form-control" placeholder="Código Unidad" aria-label="Código Unidad" aria-describedby="addon-wrapping" value={codigo} onChange={e => setCodigo(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Piso:</span>
            <input type="text" class="form-control" placeholder="Piso" aria-label="Piso" aria-describedby="addon-wrapping" value={piso} onChange={e => setPiso(e.target.value)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Número:</span>
            <input type="text" class="form-control" placeholder="Número" aria-label="Número" aria-describedby="addon-wrapping" value={numero} onChange={e => setNumero(e.target.value)}/>
          </div>
        </div>

        <div class="card-footer text-muted ">
          <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>
            Liberar Unidad
          </button>
        </div>
            
        
      </div>
    </div>
  );
};

export default LiberarUnidad;
