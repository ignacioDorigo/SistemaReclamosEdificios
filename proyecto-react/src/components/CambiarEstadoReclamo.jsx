import React, { useState } from 'react';
import Swal from 'sweetalert2'

function CambiarEstadoReclamo() {
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/reclamos/cambiarEstado?numero=${numero}&estado=${estado}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error al cambiar el estado del reclamo: ${errorData.message}`);
      }

      Swal.fire({
        title: '<strong>Cambio Exitoso</strong>',
        html: '<i>El registro cambio con exito</i>',
        icon: 'success',
        timer: 2000
      })
      // Puedes realizar alguna acción adicional después de cambiar el estado del reclamo si es necesario
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <strong>CAMBIAR ESTADO DEL RECLAMO</strong>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div class="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Número del Reclamo</span>
              <input type="text" class="form-control" placeholder="Número del Reclamo" aria-label="Número del Reclamo" aria-describedby="addon-wrapping" id="numeroInput" value={numero} onChange={(e) => setNumero(e.target.value)}/>
            </div>

            <div className="input-group flex-nowrap mb-2">
              <span class="input-group-text" id="addon-wrapping">Nuevo Estado</span>
              <select
                className="form-select"
                aria-label="Default select example"
                id="estadoInput"
                value={estado}
                onChange={handleEstadoChange}
              >
                <option value="">Selecciona un estado</option>
                <option value="nuevo">Nuevo</option>
                <option value="abierto">Abierto</option>
                <option value="enProceso">En Proceso</option>
                <option value="desestimado">Desestimado</option>
                <option value="anulado">Anulado</option>
                <option value="terminado">Terminado</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Cambiar Estado del Reclamo</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default CambiarEstadoReclamo;