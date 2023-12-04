import React, { useState } from 'react';

function AgregarPersona() {
  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar la solicitud POST
    fetch('http://localhost:8080/personas/agregarPersona', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // Ajusta el tipo de contenido según tus necesidades
      },
      body: new URLSearchParams({
        documento: documento,
        nombre: nombre,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al agregar persona');
        }
      })
      .then(() => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Persona agregada correctamente');
        // Puedes realizar alguna acción adicional después de agregar la persona
      })
      .catch(error => console.error('Error al agregar persona:', error));
  };

  return (
    <div>
      <h2>Agregar Persona</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Documento:
          <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        </label>
        <br />
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Persona</button>
      </form>
    </div>
  );
}

export default AgregarPersona;
