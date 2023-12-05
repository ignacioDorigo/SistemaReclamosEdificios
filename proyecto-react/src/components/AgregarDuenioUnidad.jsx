import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AgregarDuenioUnidad = () => {
  const [codigo, setCodigo] = useState(1);
  const [piso, setPiso] = useState('10');
  const [numero, setNumero] = useState('6');
  const [documento, setDocumento] = useState('DNI93277649');

  const handleClick = async () => {
    // Validar campos vacíos
    if (!codigo || !piso || !numero || !documento) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos',
        icon: 'error',
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/unidades/agregarDuenioUnidad?codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Error al agregar dueño a la unidad');
      }

      Swal.fire({
        title: '<strong>Registro Exitoso</strong>',
        html: '<i>El dueño se agregó con éxito</i>',
        icon: 'success',
        timer: 2000
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          AGREGAR DUEÑO A LA UNIDAD
        </div>

        <div className="card-body mb-2">
          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">Código Edificio:</span>
            <input type="number" className="form-control" placeholder="Código Edificio" aria-label="Código Edificio" aria-describedby="addon-wrapping" value={codigo} onChange={(e) => setCodigo(e.target.valueAsNumber)} />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">Piso:</span>
            <input type="text" className="form-control" placeholder="Piso" aria-label="Piso" aria-describedby="addon-wrapping" value={piso} onChange={(e) => setPiso(e.target.value)} />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">Número</span>
            <input type="text" className="form-control" placeholder="Número de Reclamo" aria-label="Número de Reclamo" aria-describedby="addon-wrapping" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">Documento</span>
            <input type="text" className="form-control" placeholder="Documento" aria-label="Documento" aria-describedby="addon-wrapping" value={documento} onChange={(e) => setDocumento(e.target.value)} />
          </div>

        </div>

        <div className="card-footer text-muted ">
          <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>
            Agregar Dueño
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgregarDuenioUnidad;
