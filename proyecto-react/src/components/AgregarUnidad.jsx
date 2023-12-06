import React, { useState } from 'react';

const AgregarUnidad = () => {
  const [codigoUnidad, setCodigoUnidad] = useState(1);
  const [piso, setPiso] = useState('');
  const [numero, setNumero] = useState('');
  const [codigo, setCodigo] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/unidades/agregarUnidad/${codigoUnidad}/${piso}/${numero}/${codigo}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Error al agregar la unidad');
      }

      const data = await response.json();

      if (data === true) {
        setMensaje('Unidad agregada correctamente.');
      } else {
        setMensaje('Error al agregar la unidad.');
      }

      console.log('Respuesta de la API:', data);
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Error al agregar la unidad.');
    }
  };

  return (
    <div className="container">
        <div className="card text-center">
            <div className="card-header">
                AGREGAR UNIDAD
            </div>

            <div className="card-body mb-2">
                <form onSubmit={handleSubmit}>
                    <label>
                    Código de la Unidad:
                    <input type="number" value={codigoUnidad} onChange={(e) => setCodigoUnidad(e.target.value)} />
                    </label>
                    <br />
                    <label>
                    Piso:
                    <input type="text" value={piso} onChange={(e) => setPiso(e.target.value)} />
                    </label>
                    <br />
                    <label>
                    Número:
                    <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </label>
                    <br />
                    <label>
                    Código:
                    <input type="number" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Agregar Unidad</button>
                </form>
                {mensaje && <p>{mensaje}</p>}

            </div>
        </div>
    </div>
  );
};

export default AgregarUnidad;