import React from 'react';
import { NavLink } from "react-router-dom";
import './estilos.css'

function Nav(){
    return(
        <div class="navbar">
            <div class="left">
                <h1>Sistema Reclamo</h1>
            </div>
            <div class="right">
                <button>
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                </button>
                <button>
                    <NavLink to='/register'>
                        Register
                    </NavLink>
                </button>
            </div>
        </div>

    )
}

export default Nav; 