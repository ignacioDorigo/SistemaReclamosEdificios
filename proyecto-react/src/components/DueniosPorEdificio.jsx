import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DueniosPorEdificio() {
    const [habilitadosPorEdificio, setHabilitadosPorEdificio] = useState([]);
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [numeroEdificio, setNumeroEdificio] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:8080/edificios/listarDueniosPorEdificio/${numeroEdificio}`)
            .then(response => response.json())
            .then(data => setHabilitadosPorEdificio(data))
            .catch(error => console.error('Error fetching edificios:', error));
    }, [numeroEdificio]); 

    const handleNumeroEdificioChange = (e) => {
        setNumeroEdificio(e.target.value);
    };

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    GESTION DE DUENIOS POR EDIFICIO
                </div>
                <div className="card-body">
                    <input
                        type="number"
                        value={numeroEdificio}
                        onChange={handleNumeroEdificioChange}
                    />

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(habilitadosPorEdificio) && habilitadosPorEdificio.length > 0 ? (
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

export default DueniosPorEdificio;
