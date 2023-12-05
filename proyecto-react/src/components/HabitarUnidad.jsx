import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const HabitarUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');

  const handleHabitarUnidad = async () => {
    // Validar que todos los campos estén completos
    if (!codigo || !piso || !numero) {
      // Mostrar una alerta usando SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/unidades/habitarUnidad/${codigo}/${piso}/${numero}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // La solicitud fue exitosa
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>La unidad se habilitó</i>',
          icon: 'success',
          timer: 2000
        });
      } else {
        // La solicitud falló
        console.error('Error al habitar la unidad');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <strong>HABITAR UNIDAD</strong>
        </div>

        <div className="card-body">
          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Código Edificio
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Codigo Edificio"
              aria-label="Código"
              aria-describedby="addon-wrapping"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Piso
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Piso"
              aria-label="Piso"
              aria-describedby="addon-wrapping"
              value={piso}
              onChange={(e) => setPiso(e.target.value)}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Número
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Número"
              aria-label="Número"
              aria-describedby="addon-wrapping"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
        </div>

        <div className="card-footer text-muted">
          <button type="button" className="btn btn-success mb-3" onClick={handleHabitarUnidad}>
            Habitar Unidad
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitarUnidad;
