import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const BuscarImagenesPorNumeroReclamo = () => {
  const [imagenesPorReclamo, setImagenesPorReclamo] = useState([]);
  const [reclamoId, setReclamoId] = useState('1');

  useEffect(() => {
    fetch(`http://localhost:8080/imagenes/buscarImagenesPorNumeroReclamo/${reclamoId}`)
      .then((response) => response.json())
      .then((data) => setImagenesPorReclamo(data))
      .catch((error) => console.error('Error fetching edificios:', error));
      
  }, [reclamoId]);

  const handleEdificioIdChange = (event) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    setReclamoId(numericValue);
  };

  const handleImageClick = (imageUrl) => {
    // Mostrar la alerta de SweetAlert2 cuando se haga clic en la imagen
    Swal.fire({
      title: "Problema",

      imageUrl: imageUrl,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          BUSQUEDA DE IMAGENES POR RECLAMO
        </div>
        <div className="card-body">
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">Ingrese el número del edificio:</span>
            <input type="text" className="form-control" placeholder="número del edificio" aria-label="número del edificio" aria-describedby="addon-wrapping" value={reclamoId} onChange={handleEdificioIdChange} />
          </div>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">idImagen</th>
                <th scope="col">Direccion</th>
                <th scope="col">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(imagenesPorReclamo) && imagenesPorReclamo.length > 0 ? (
                imagenesPorReclamo.map((val, key) => (
                  <tr key={val.reclamoId}>
                    <td>{val.numero}</td>
                    <td>
                      {/* Envolver el contenido en un hipervínculo y agregar onClick */}
                      <a href="#" onClick={() => handleImageClick(val.direccion)}>
                        {val.direccion}
                      </a>
                    </td>
                    <td>{val.tipo}</td>
                  </tr>
                  
                ))
              ) : (
                <tr>
                  <td colSpan="5">No hay datos disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuscarImagenesPorNumeroReclamo;
