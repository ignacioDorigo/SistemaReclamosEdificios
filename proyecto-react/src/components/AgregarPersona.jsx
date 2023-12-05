import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AgregarPersona() {
  const [documento, setDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Desactivar el botón durante la solicitud
    setIsLoading(true);

    // Validar que ambos campos estén llenos
    if (!documento || !nombre) {
      // Restaurar el estado de isLoading si hay un error
      setIsLoading(false);

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
        'Content-Type': 'application/x-www-form-urlencoded',
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
        return response.json(); // Parsear la respuesta como JSON
      })
      .then(data => {
        // Verificar el valor de la respuesta
        if (data === true) {
          // Mostrar la alerta de éxito
          Swal.fire({
            title: '<strong>Registro Exitoso</strong>',
            html: `<i>La persona <strong>${nombre}</strong> fue registrada con éxito</i>`,
            icon: 'success',
            timer: 2000
          });
        } else {
          // Mostrar la alerta de error
          throw new Error('Error al agregar persona');
        }
      })
      .catch(error => {
        console.error('Error al agregar persona:', error);
        // Muestra un mensaje de error
        Swal.fire({
          title: 'Error',
          text: `Hubo un error al agregar la persona: ${error.message}`,
          icon: 'error',
        });
      })
      .finally(() => {
        // Restaurar el estado de isLoading después de la solicitud
        setIsLoading(false);
      });
  };

  return (
    <div className="container">

      <div className="card text-center">

        <div className="card-header">
          <strong>AGREGAR PERSONA</strong>
        </div>

        <div className="card-body">
          
          <form onSubmit={handleSubmit}>
            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Documento</span>
              <input type="text" class="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="addon-wrapping" id="documentoInput" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
            </div>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Nombre</span>
              <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="addon-wrapping" id="nombreInput" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Agregando...' : 'Agregar Persona'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default AgregarPersona;