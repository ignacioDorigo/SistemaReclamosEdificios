import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HabitantesPorEdificio() {
    const [habitantesPorEdificio, setHabitantesPorEdificio] = useState([]);
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [numeroEdificio, setNumeroEdificio] = useState(1); // Nuevo estado para el número del edificio

    useEffect(() => {
        fetch(`http://localhost:8080/edificios/listarHabitantesPorEdificio/${numeroEdificio}`)
            .then(response => response.json())
            .then(data => setHabitantesPorEdificio(data))
            .catch(error => console.error('Error fetching edificios:', error));
    }, [numeroEdificio]); // Agregar número de edificio como dependencia del efecto

    const handleNumeroEdificioChange = (e) => {
        setNumeroEdificio(e.target.value);
    };

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    GESTION DE HABITANTES POR EDIFICIO
                </div>
                <div className="card-body">
                    {/* Agregar input para el número de edificio */}
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
                            {Array.isArray(habitantesPorEdificio) && habitantesPorEdificio.length > 0 ? (
                                habitantesPorEdificio.map((val, key) => (
                                    <tr key={val.codigo}>
                                        <td>{val.documento}</td>
                                        <td>{val.nombre}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2">No hay habitantes para el edificio seleccionado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HabitantesPorEdificio;
