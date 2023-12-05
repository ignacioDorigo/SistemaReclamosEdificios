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
    <div>
      <h2>Liberar Unidad</h2>
      <form>
        <label>
          Código:
          <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
        </label>
        <br />
        <label>
          Piso:
          <input type="text" value={piso} onChange={e => setPiso(e.target.value)} />
        </label>
        <br />
        <label>
          Número:
          <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleClick}>
          Liberar Unidad
        </button>
      </form>
    </div>
  );
};

export default LiberarUnidad;
