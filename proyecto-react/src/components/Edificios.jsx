import React, { useState, useEffect } from 'react';

const Edificios = () => {
  const [edificios, setEdificios] = useState([]);

  useEffect(() => {
    const fetchEdificios = async () => {
      try {
        const response = await fetch('http://localhost:8080/edificios/listar');
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        const data = await response.json();
        setEdificios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEdificios();
  }, []);

  return (
    <div>
      <h2>Listado de Edificios</h2>
      <ul>
        {edificios.map((edificio) => (
          <li key={edificio.id}>
            <strong>{edificio.nombre}</strong> - {edificio.direccion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Edificios;