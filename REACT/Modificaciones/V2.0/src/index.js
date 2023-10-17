import React from 'react';
import ReactDOM from 'react-dom/client';
/*import App from './App';*/
import Menu from './main-menu';
import Nav from './nav-all';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Menu/>
  </React.StrictMode>
);
