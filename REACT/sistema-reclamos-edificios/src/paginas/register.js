import React, { Component } from 'react';

class RegistroPersonas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mail: '',
            password: '',
          personasRegistradas: [],
        };
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { username, mail, password, personasRegistradas } = this.state;
        
        if (username && mail && password) {
          const nuevaPersona = {
            username,
            mail,
            password
          };
    
          this.setState({
            username: '',
            mail: '',
            password: '',
            personasRegistradas: [...personasRegistradas, nuevaPersona],
          });
        }
      }

      render() {
        return (
          <div className="entorno_form">
            <div className="container_login-register">
              <h2 className="login-register">Registro de Usuarios</h2>
              <form className="form_login" onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="username"></label>
                  <input
                    type="text"
                    id="nombre_form"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="nombre_form"
                    placeholder='Username'
                  />
                </div>

                <div>
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    id="contraseña_form"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="nombre_form" // Puedes usar la misma clase para password si lo deseas.
                    placeholder='Password'
                  />
                </div>

                <div>
                  <label htmlFor="mail"></label>
                  <input
                    type="text"
                    id="mail_form"
                    name="mail"
                    value={this.state.mail}
                    onChange={this.handleChange}
                    className="nombre_form" // Puedes usar la misma clase para mail si lo deseas.
                    placeholder='Mail'
                  />
                </div>
                

                <br/>
                <br/>

                <button type="submit" className="boton_login_register">Registrar</button>

              </form>
              <div>
                <h3>Personas Registradas:</h3>
                <ul>
                  {this.state.personasRegistradas.map((persona, index) => (
                    <li key={index}>
                      {persona.username}, {persona.mail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default RegistroPersonas;