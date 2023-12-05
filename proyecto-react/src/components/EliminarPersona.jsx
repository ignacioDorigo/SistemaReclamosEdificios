import React, { useState } from 'react';
import Swal from 'sweetalert2';

const EliminarPersona = () => {
  const [documento, setDocumento] = useState('');

  const handleClick = async () => {
    // Validar que el campo no esté vacío
    if (!documento) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un documento antes de intentar eliminar.',
        icon: 'error',
      });
      return;
    }

    // Alerta SweetAlert2 antes de realizar la eliminación
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: '¿Estás seguro?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(
              `http://localhost:8080/personas/eliminarPersona?documento=${documento}`,
              {
                method: 'DELETE',
              }
            );

            if (response.ok) {
              const data = await response.json();
              if (data) {
                // Persona eliminada exitosamente
                swalWithBootstrapButtons.fire({
                  title: '¡Eliminado!',
                  text: 'La persona ha sido eliminada exitosamente.',
                  icon: 'success',
                });
              } else {
                console.log(
                  'No se pudo eliminar la persona. El resultado es falso.'
                );
              }
            } else {
              console.error('Error al eliminar la persona');
            }
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Acción cancelada
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'La persona no se eliminó',
            icon: 'error',
          });
        }
      });
  };

  return (
    <div className='container'>
      <div className="card text-center">
        <div className="card-header">
          <strong>ELIMINAR PERSONA</strong>
        </div>

        <div className="card-body">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Documento</span>
            <input
              type="text"
              className="form-control"
              placeholder="Documento"
              aria-label="Documento"
              aria-describedby="addon-wrapping"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
            />
          </div>
        </div>

        <div className="card-footer text-muted">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Eliminar Persona
          </button>
        </div>

      </div>
    </div>
  );
};

export default EliminarPersona;
