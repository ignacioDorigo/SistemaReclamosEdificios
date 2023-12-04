import React, { useState } from 'react';
import Swal from 'sweetalert2';

function EliminarPersona() {
  const [documento, setDocumento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el campo está vacío
    if (!documento) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un documento antes de eliminar.',
        icon: 'error',
      });
      return;
    }

    // Confirmar eliminación después de la verificación
    const confirmarEliminacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo"
    });

    if (!confirmarEliminacion.isConfirmed) {
      return;
    }

    // Intentar eliminar la persona
    try {
      const response = await fetch(`http://localhost:8080/personas/eliminarPersona?documento=${documento}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error al eliminar persona: ${errorData.message}`);
      }

      // Persona eliminada correctamente
      Swal.fire({
        title: "¡Eliminado!",
        text: "Tu archivo ha sido eliminado.",
        icon: "success"
      });

      // Puedes realizar alguna acción adicional después de eliminar la persona si es necesario

    } catch (error) {
      console.error(error.message);

      // Muestra una alerta de error si falla la eliminación
      Swal.fire({
        title: "Error",
        text: `Hubo un error al eliminar la persona: ${error.message}`,
        icon: "error"
      });
    }
  };

  return (
    <div className="container mt-4 rounded p-4">
      <h2 className="mb-4">Eliminar Persona</h2>
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
        <button type="submit" className="btn btn-danger">Eliminar Persona</button>
      </form>
    </div>
  );
}

export default EliminarPersona;
