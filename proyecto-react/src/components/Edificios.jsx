import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function Edificios() {
  const [edificios, setEdificios] = useState([]);
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [codigo, setCodigo] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/edificios/listar')
      .then(response => response.json())
      .then(data => setEdificios(data))
      .catch(error => console.error('Error fetching edificios:', error));
  }, []);

  return (
    <div className="container">
        <div className="card text-center">

            <div className="card-header">
                GESTION DE EDIFICIOS
            </div>
            
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>                    
                        </tr>
                    </thead>
                    <tbody>
                    {
                        edificios.map((val,key)=>{
                        return <tr key={val.codigo}>
                                    <td>{val.nombre}</td>
                                    <td>{val.direccion}</td>
                                </tr>
                        })
                    }
                    </tbody>
                 </table>
            </div>

        </div>
    </div>
    )
}

export default Edificios;
