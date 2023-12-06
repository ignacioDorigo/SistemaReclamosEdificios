import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AgregarEdificio = () => {
  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleClick = async () => {
    // Validar que los campos no estén vacíos
    if (!codigo || !nombre || !direccion) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, complete todos los campos',
            icon: 'error',
          });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/edificios/agregarEdificio/${codigo}/${encodeURIComponent(nombre)}/${encodeURIComponent(direccion)}`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          title: '<strong>Registro Exitoso</strong>',
          html: '<i>El edificio se creó con éxito</i>',
          icon: 'success',
          timer: 2000,
        });
        setResultado(data);
      } else {
        setResultado('Error al agregar el edificio');
      }
    } catch (error) {
      console.error('Error:', error);
      setResultado('Error al realizar la solicitud');
    }
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">AGREGAR EDIFICIO</div>
        <div className="card-body mb-2">
          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Código Edificio:
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Código Edificio"
              aria-label="Código Edificio"
              aria-describedby="addon-wrapping"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Nombre Edificio:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Edificio"
              aria-label="Nombre Edificio"
              aria-describedby="addon-wrapping"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="input-group flex-nowrap mb-2">
            <span className="input-group-text" id="addon-wrapping">
              Dirección Edificio:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Dirección Edificio"
              aria-label="Dirección Edificio"
              aria-describedby="addon-wrapping"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
        </div>

        <div className="card-footer text-muted ">
          <button type="button" className="btn btn-primary mb-3" onClick={handleClick}>
            Agregar Edificio
          </button>
          {resultado && <p>{resultado}</p>}
        </div>
      </div>
    </div>
  );
};

export default AgregarEdificio;
