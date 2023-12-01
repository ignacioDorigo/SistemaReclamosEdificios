import React from "react";
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from  'react-router-dom'
import { Navigate } from "react-router-dom"; 

import Login from './paginas/login'
import Register from './paginas/register'
import Menu from './main-menu'
import Nav from './nav-all'
import Home from './paginas/home_page'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/register" element={<Register/>}> </Route>
        <Route path="/home_page" element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
