package com.example.demo.controladoresRest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.PersonaException;

@RestController
@RequestMapping("/personas")
public class PersonaController {

	@Autowired
	Controlador controlador;

	@PostMapping("/agregarPersona")
	public boolean agregarPersona(@RequestParam String documento, @RequestParam String nombre) throws PersonaException {
		return controlador.agregarPersona(documento, nombre);
	}
	
	@DeleteMapping("/eliminarPersona")
	public boolean eliminarPersona(@RequestParam String documento) throws PersonaException{
		return controlador.eliminarPersona(documento);
	}

}
