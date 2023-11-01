import React, { Component } from 'react';
import './App.css';
import { EdificioService } from './service/EdificioService';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      edificios: []
    };
    this.edificioService = new EdificioService();
  }

  componentDidMount() {
    this.edificioService.getAll().then(data => {
      this.setState({ edificios: data });
    });
  }

  render() {
    return (
      <div>
        <h1>Edificios:</h1>
        <ul>
          {this.state.edificios.map(edificio => (
            <li key={edificio.codigo}>
              <strong>{edificio.nombre}</strong> - {edificio.direccion}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}