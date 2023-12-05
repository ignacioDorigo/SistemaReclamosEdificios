import React, { useState } from 'react';
import Swal from 'sweetalert2'

const CambiarEstadoReclamo = () => {
  // Estado local para almacenar el número y estado del reclamo
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('abierto'); // Valor predeterminado, puedes establecerlo según tus necesidades

  // Lista predefinida de estados permitidos
  const estadosPermitidos = ['nuevo', 'abierto', 'enProceso', 'desestimado', 'anulado', 'terminado'];

  // Manejar el cambio en el select del estado
  const handleEstadoChange = (e) => {
    const nuevoEstado = e.target.value;

    // Verificar si el nuevo estado es uno de los permitidos
    if (estadosPermitidos.includes(nuevoEstado)) {
      setEstado(nuevoEstado);
    } else {
      console.error('Error: Estado no válido');
    }
  };

  // Manejar el clic en el botón para cambiar el estado
  const handleClick = async () => {
    try {
      // Hacer la solicitud HTTP usando fetch
      const response = await fetch(`http://localhost:8080/reclamos/cambiarEstado?numero=${numero}&estado=${estado}`, {
        method: 'PUT',
      });

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        if (data) {
          Swal.fire({
            title: '<strong>Registro Exitoso</strong>',
            html: '<i>El inquilino fue agregado con exito</i>',
            icon: 'success',
            timer: 2000
          })

        } else {
          Swal.fire({
            title: '<strong>Reclamo no encontrado</strong>',
            html: '<i>No se encontro</i>',
            icon: 'error',
            timer: 2000
          })
        }
      } else {
        console.error('Error al cambiar el estado del reclamo');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="container">
      <div className="card text-center">

        <div className="card-header">
          <strong>CAMBIAR ESTADO DE RECLAMO</strong>
        </div>

        <div className="card-body">

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Número del reclamo</span>
            <input type="number" class="form-control" placeholder="Número del reclamo" aria-label="Número del reclamo" aria-describedby="addon-wrapping" value={numero} onChange={(e) => setNumero(e.target.valueAsNumber)}/>
          </div>

          <div class="input-group flex-nowrap mb-2">
            <span class="input-group-text" id="addon-wrapping">Estado</span>
            <select class="form-select" aria-label="Default select example" value={estado} onChange={handleEstadoChange}>
              {estadosPermitidos.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>

        
          
        </div>

        <div class="card-footer text-muted">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Cambiar Estado
          </button>
        </div>

      </div>
    </div>
  );
};

export default CambiarEstadoReclamo;
