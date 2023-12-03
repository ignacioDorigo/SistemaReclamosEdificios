import React, { useState, useEffect } from 'react'

function Login() {
    const[login,setLogin] = useState()
    useEffect(()=>{
        fetch('http://localhost:8080/inicio/login/DNIDOR@gmail.com/DNI42411691/0')
        .then(response => response.json())
        .then(data => setLogin(data))
        
    },[])
    console.log(login)

  return (
    <div>
        {login}
    </div>
  )
}

export default Login