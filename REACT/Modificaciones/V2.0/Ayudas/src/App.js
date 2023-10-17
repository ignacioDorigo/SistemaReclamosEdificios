import React from "react";
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from  'react-router-dom'
import { Navigate } from "react-router-dom"; 

import Login from './paginas/Login.js'
import HomePage from './paginas/HomePage.js'
import About from './paginas/About.js'
import Menu from './Menu.js'
import FormularioFuncion from './paginas/FormularioFuncion.js'


function App() {  
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path= "/login" element={<Login />}> </Route>
        <Route path= "/home" element={<HomePage />}> </Route>
        <Route path= "/about" element={<About />}> </Route>
        <Route path= "/datos" element={<FormularioFuncion />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
