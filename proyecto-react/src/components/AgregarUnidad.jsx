import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AgregarUnidad = () => {
  const [codigoUnidad, setCodigoUnidad] = useState(1);
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [codigo, setCodigo] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!codigoUnidad || !piso || !numero || !codigo) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, complete todos los campos',
            icon: 'error',
          });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/unidades/agregarUnidad/${codigoUnidad}/${piso}/${numero}/${codigo}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Error al agregar la unidad');
      }

      const data = await response.json();

      if (data === true) {
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>La unidad se agregó con éxito</i>',
          icon: 'success',
          timer: 2000
        });
      } else {
        setMensaje('Error al agregar la unidad.');
      }

      console.log('Respuesta de la API:', data);
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Error al agregar la unidad.');
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          AGREGAR UNIDAD
        </div>

        <div className="card-body mb-2">
          <form onSubmit={handleSubmit}>
            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text" id="addon-wrapping">Código de la Unidad:</span>
              <input type="number" className="form-control" placeholder="Código de la Unidad" aria-label="Código de la Unidad" aria-describedby="addon-wrapping" value={codigoUnidad} onChange={(e) => setCodigoUnidad(e.target.value)} />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text" id="addon-wrapping">Piso:</span>
              <input type="number" className="form-control" placeholder="Piso" aria-label="Piso" aria-describedby="addon-wrapping" value={piso} onChange={(e) => setPiso(e.target.value)} />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text" id="addon-wrapping">Número:</span>
              <input type="number" className="form-control" placeholder="Número" aria-label="Número" aria-describedby="addon-wrapping" value={numero} onChange={(e) => setNumero(e.target.value)} />
            </div>

            <div className="input-group flex-nowrap mb-2">
              <span className="input-group-text" id="addon-wrapping">Código:</span>
              <input type="number" className="form-control" placeholder="Código" aria-label="Código" aria-describedby="addon-wrapping" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary mb-3">
              Agregar Unidad
            </button>

            {mensaje && <p>{mensaje}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarUnidad;
