import React from 'react';
import './estilos.css'
/*import { NavLink } from "react-router-dom";

<NavLink to="/login">
     Login
</NavLink>

<NavLink to="/register">
    Register
</NavLink>

*/

function Menu(){
    return(
        <div className='entorno'>
            <div class="container_menu">
                <div class="left-column">
                    <button class="centered-button">
                        Login
                    </button>
                </div>

                <div class="right-column">
                    <button class="centered-button">
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu