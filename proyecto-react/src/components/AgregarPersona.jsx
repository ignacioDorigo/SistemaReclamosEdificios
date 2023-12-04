import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AgregarPersona() {
  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que ambos campos estén llenos
    if (!documento || !nombre) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        icon: 'error',
      });
      return;
    }

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
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>La persona <strong>' + nombre + '</strong> fue registrado con éxito</i>',
          icon: 'success',
          timer: 2000
        });
        // Puedes realizar alguna acción adicional después de agregar la persona
      })
      .catch(error => {
        console.error('Error al agregar persona:', error);
        // Muestra un mensaje de error
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al agregar la persona: ${error.message}`,
          icon: 'error',
        });
      });
  };

  return (
    <div className="container mt-4 rounded p-4">
      <h2 className="mb-4">Agregar Persona</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="documentoInput" className="form-label">Documento:</label>
          <input
            type="text"
            className="form-control"
            id="documentoInput"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreInput" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombreInput"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Agregar Persona</button>
      </form>
    </div>
  );
}

export default AgregarPersona;
