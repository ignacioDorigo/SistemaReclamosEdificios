import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HabilitadosPorEdificio() {
    const [habilitadosPorEdificio, setHabilitadosPorEdificio] = useState([]);
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [numeroEdificio, setNumeroEdificio] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/edificios/listarHabilitadosPorEdificio/${numeroEdificio}`)
            .then(response => response.json())
            .then(data => setHabilitadosPorEdificio(data))
            .catch(error => console.error('Error fetching edificios:', error));
    }, [numeroEdificio]);

    const actualizarEdificio = () => {
        const nuevaUrl = `http://localhost:8080/edificios/listarHabilitadosPorEdificio/${numeroEdificio}`;

        fetch(nuevaUrl)
            .then(response => response.json())
            .then(data => setHabilitadosPorEdificio(data))
            .catch(error => console.error('Error fetching edificios:', error));
    };

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    GESTION DE HABILITADO POR EDIFICIO
                </div>
                <div className="card-body">

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Numero</span>
                        <input type="number" class="form-control" placeholder="Numero" aria-label="Numero" aria-describedby="basic-addon1" value={numeroEdificio === 0 ? '' : numeroEdificio} onChange={(e) => setNumeroEdificio(e.target.value === '' ? '' : parseInt(e.target.value, 10))}/>
                    </div>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {habilitadosPorEdificio && Array.isArray(habilitadosPorEdificio) && habilitadosPorEdificio.length > 0 ? (
                                habilitadosPorEdificio.map((val, key) => (
                                    <tr key={val.codigo}>
                                        <td>{val.documento}</td>
                                        <td>{val.nombre}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No hay datos disponibles</td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default HabilitadosPorEdificio;
