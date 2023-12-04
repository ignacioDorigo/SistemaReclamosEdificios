import React, { useState } from 'react'

function AgregarReclamo() {

    const [codigo, setCodigo] = useState('');
    const [piso, setPiso] = useState('');
    const [numero, setNumero] = useState('');
    const [documento, setDocumento] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Realizar la solicitud POST
        fetch('http://localhost:8080/reclamos/agregarReclamo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Ajusta el tipo de contenido según tus necesidades
            },
            body: new URLSearchParams({
            codigo: codigo,
            piso: piso,
            numero: numero,
            documento: documento,
            ubicacion: ubicacion,
            descripcion: descripcion,
            }),
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar reclamo');
            }
            })
            .then(() => {
            // Manejar la respuesta del servidor si es necesario
            console.log('Reclamo agregado correctamente');
            // Puedes realizar alguna acción adicional después de agregar la persona
            })
            .catch(error => console.error('Error al agregar reclamo:', error));
    }


  return (
    <div>
      <h2>Agregar Reclamo</h2>
      <form onSubmit={handleSubmit}>

        <label>
          Codigo:
          <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
        </label>

        <br />

        <label>
          Piso:
          <input type="text" value={piso} onChange={(e) => setPiso(e.target.value)} />
        </label>

        <br />

        <label>
          Numero:
          <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
        </label>

        <br />

        <label>
          Documento:
          <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        </label>

        <br />
        
        <label>
          Ubicacion:
          <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
        </label>

        <br />

        <label>
          Descripcion:
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <br />
        


        <button type="submit">Agregar Reclamo</button>
      </form>
    </div>
  )
}

export default AgregarReclamo