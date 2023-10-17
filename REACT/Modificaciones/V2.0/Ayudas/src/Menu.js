import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <div>
            <ul>
                <li>
                    <NavLink to="/home"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/login"> Login </NavLink>
                </li>
                <li>
                    <NavLink to="/about"> Home </NavLink>
                </li>
                <li>
                    <NavLink to="/datos"> Formulario </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu