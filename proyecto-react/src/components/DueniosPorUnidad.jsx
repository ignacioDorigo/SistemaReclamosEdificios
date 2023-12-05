import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DueniosPorUnidad() {
    const [dueniosPorUnidad, setDueniosPorUnidad] = useState([]);
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [numero3, setNumero3] = useState('');
    const [sinResultados, setSinResultados] = useState(false);

    useEffect(() => {
        // Verifica si los inputs están vacíos
        const inputsVacios = !numero1.trim() || !numero2.trim() || !numero3.trim();

        if (inputsVacios) {
            setDueniosPorUnidad([]); // Reinicia la lista de resultados
            setSinResultados(true);
            return; // Evita hacer la solicitud si los inputs están vacíos
        }

        fetch(`http://localhost:8080/unidades/listarDueniosPorUnidad/${numero1}/${numero2}/${numero3}`)
            .then(response => response.json())
            .then(data => {
                setDueniosPorUnidad(data);
                setSinResultados(data.length === 0); // Verifica si hay resultados
            })
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
                        <span className="input-group-text">Codigo de Edificio</span>
                        <input type="text" className="form-control" id="numero1" value={numero1} onChange={handleChange1} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Piso</label>
                        <input type="text" className="form-control" id="numero2" value={numero2} onChange={handleChange2} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text">Numero</label>
                        <input type="text" className="form-control" id="numero3" value={numero3} onChange={handleChange3} />
                    </div>
                    {sinResultados ? (
                        <p>No se ha encontrado nada</p>
                    ) : (
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
                    )}
                </div>
            </div>
        </div>
    );
}

export default DueniosPorUnidad;
