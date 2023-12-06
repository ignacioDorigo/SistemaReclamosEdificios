import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReclamosPorUnidad() {
  const [reclamosPorUnidad, setReclamosPorUnidad] = useState([]);
  const [numero, setNumero] = useState('');
  const [usuario, setUsuario] = useState('');
  const [edificio, setEdificio] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [unidad, setUnidad] = useState('');
  const [estado, setEstado] = useState('');
  const [numeroUrl, setNumeroUrl] = useState(2);
  const [usuarioUrl, setUsuarioUrl] = useState(10);
  const [edificioUrl, setEdificioUrl] = useState(6);

  useEffect(() => {
    const url = `http://localhost:8080/reclamos/reclamosPorUnidad/${numeroUrl}/${usuarioUrl}/${edificioUrl}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setReclamosPorUnidad(data))
      .catch(error => console.error('Error fetching edificios:', error));
  }, [numeroUrl, usuarioUrl, edificioUrl]);

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
          GESTION DE RECLAMOS POR UNIDAD
        </div>
        <div className="card-body">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Cod Edificio</span>
                <input type="text" class="form-control" placeholder="Cod Edificio" aria-label="Username" aria-describedby="basic-addon1" value={numero} onChange={e => setNumero(e.target.value)} onBlur={() => setNumeroUrl(numero)}/>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Piso</span>
                <input type="text" class="form-control" placeholder="Piso" aria-label="Username" aria-describedby="basic-addon1" value={usuario} onChange={e => setUsuario(e.target.value)} onBlur={() => setUsuarioUrl(usuario)}/>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Departamento</span>
                <input type="text" class="form-control" placeholder="Departamento" aria-label="Username" aria-describedby="basic-addon1" value={edificio} onChange={e => setEdificio(e.target.value)} onBlur={() => setEdificioUrl(edificio)}/>
            </div>


          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Numero</th>
                <th scope="col">Usuario</th>
                <th scope="col">Edificio</th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Unidad</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
                {Array.isArray(reclamosPorUnidad) && reclamosPorUnidad.length > 0 ? (
                    reclamosPorUnidad.map((val, key) => (
                    <tr key={val.codigo}>
                        <td>{val.numero}</td>
                        <td>{val.usuario}</td>
                        <td>{val.edificio}</td>
                        <td>{val.ubicacion}</td>
                        <td>{val.descripcion}</td>
                        <td>{val.unidad}</td>
                        <td>{val.estado}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="7">No hay datos disponibles</td>
                    </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReclamosPorUnidad;
