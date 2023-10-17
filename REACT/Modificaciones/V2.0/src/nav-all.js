import React from 'react';
import './estilos.css'

function Nav(){
    return(
        <div class="navbar">
            <div class="left">
                <h1>Sistema Reclamo</h1>
            </div>
            <div class="right">
                <a href="register.html">Register</a>
                <a href="login.html">Login</a>
                <a href="#">Inicio</a>
            </div>
        </div>

    )
}

export default Nav;