import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TransferirUnidad = () => {
  const [codigo, setCodigo] = useState('');
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [documento, setDocumento] = useState('');

  const handleTransferirUnidad = async () => {
    // Validar que todos los campos estén llenos
    if (!codigo || !piso || !numero || !documento) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, complete todos los campos.',
        icon: 'error',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/unidades/transferirUnidad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `codigo=${codigo}&piso=${piso}&numero=${numero}&documento=${documento}`,
      });

      if (response.ok) {
        // La solicitud fue exitosa
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>Unidad transferida exitosamente!</i>',
          icon: 'success',
          timer: 2000,
        });
      } else {
        // La solicitud falló
        console.error('Error al transferir la unidad');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          <strong>TRANSFERIR UNIDAD</strong>
        </div>

        <div className="card-body">
          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Código Edificio
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Código"
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

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Documento
            </span>
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
          <button type="button" className="btn btn-primary" onClick={handleTransferirUnidad}>
            Transferir Unidad
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferirUnidad;
 