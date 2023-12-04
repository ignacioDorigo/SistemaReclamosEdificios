import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DueniosPorUnidad() {
    const [dueniosPorUnidad, setDueniosPorUnidad] = useState([]);
    const [numero1, setNumero1] = useState(1);
    const [numero2, setNumero2] = useState(2);
    const [numero3, setNumero3] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:8080/unidades/listarDueniosPorUnidad/${numero1}/${numero2}/${numero3}`)
            .then(response => response.json())
            .then(data => setDueniosPorUnidad(data))
            .catch(error => console.error('Error fetching edificios:', error));
    }, [numero1, numero2, numero3]);

    const handleChange1 = (event) => {
        setNumero1(event.target.value);
    };

    const handleChange2 = (event) => {
        setNumero2(event.target.value);
    };

    const handleChange3 = (event) => {
        setNumero3(event.target.value);
    };

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    GESTION DE DUENIOS POR UNIDAD
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Número 1:</span>
                        <input type="text" className="form-control" id="numero1" value={numero1} onChange={handleChange1} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Número 2:</label>
                        <input type="text" className="form-control" id="numero2" value={numero2} onChange={handleChange2} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Número 3:</label>
                        <input type="text" className="form-control" id="numero3" value={numero3} onChange={handleChange3} />
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(dueniosPorUnidad) &&
                                dueniosPorUnidad.map((val, key) => (
                                    <tr key={val.codigo}>
                                        <td>{val.documento}</td>
                                        <td>{val.nombre}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DueniosPorUnidad;
