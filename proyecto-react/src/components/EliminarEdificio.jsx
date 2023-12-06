import React, { useState } from 'react';
import Swal from 'sweetalert2';

const EliminarEdificio = () => {
  const [codigoEdificio, setCodigoEdificio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEliminarEdificio = async () => {
    // Mostrar la alerta de confirmación antes de la eliminación
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "No, cancelar",
      reverseButtons: true
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:8080/edificios/eliminarEdificio/${codigoEdificio}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          Swal.fire({
            title: '<strong>Eliminación Exitosa</strong>',
            html: '<i>El edificio se eliminó con éxito</i>',
            icon: 'success',
            timer: 2000
          });
          
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Por favor, revise los campos',
            icon: 'error',
          });
        }
      } catch (error) {
        console.error('Error en la solicitud DELETE:', error);
        setMensaje('Error en la solicitud DELETE.');
      }
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          ELIMINAR EDIFICIO
        </div>

        <div className="card-body mb-2">
          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">Numero Edificio:</span>
            <input type="number" className="form-control" placeholder="Numero Edificio" aria-label="Numero Edificio" aria-describedby="addon-wrapping" value={codigoEdificio} onChange={(e) => setCodigoEdificio(e.target.value)} />
          </div>
        </div>

        <div className="card-footer text-muted ">
          <button type="button" className="btn btn-primary mb-3" onClick={handleEliminarEdificio}>
            Eliminar Edificio
          </button>
          <p>{mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default EliminarEdificio;