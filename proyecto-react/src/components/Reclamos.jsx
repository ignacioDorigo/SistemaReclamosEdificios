import React, { useState, useEffect } from 'react'

function Reclamos() {
    const[reclamo,setReclamo] = useState()
    useEffect(()=>{
        fetch('http://localhost:8080/reclamos/reclamosPorNumero/1')
        .then(response => response.json())
        .then(data => setReclamo(data))
    },[])


  return (
    <div>
        <span className='m-2'>{reclamo && reclamo.usuario}</span>
        <span className='m-2'>{reclamo && reclamo.numero}</span>
        <span className='m-2'>{reclamo && reclamo.estado}</span>
    </div>
  )
}

export default Reclamos