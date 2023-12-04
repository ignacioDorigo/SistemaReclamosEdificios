import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReclamosPorEdificio() {
    const [reclamosPorEdificio, setReclamosPorEdificio] = useState([]);
    const [edificioNumero, setEdificioNumero] = useState('2'); // Valor inicial, puedes cambiarlo según tus necesidades

    useEffect(() => {
        fetch(`http://localhost:8080/reclamos/reclamosPorEdificio/${edificioNumero}`)
            .then(response => response.json())
            .then(data => setReclamosPorEdificio(data))
            .catch(error => console.error('Error fetching edificios:', error));
    }, [edificioNumero]);

    const handleEdificioNumeroChange = (e) => {
        setEdificioNumero(e.target.value);
    };

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    RECLAMOS POR EDIFICIO
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="edificioNumeroInput" className="form-label">Número de Edificio:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="edificioNumeroInput"
                            value={edificioNumero}
                            onChange={handleEdificioNumeroChange}
                        />
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
                            {Array.isArray(reclamosPorEdificio) && reclamosPorEdificio.length > 0 ? (
                                reclamosPorEdificio.map((val, key) => (
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
                                    <td colSpan="7">No hay reclamos para este edificio</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReclamosPorEdificio;
