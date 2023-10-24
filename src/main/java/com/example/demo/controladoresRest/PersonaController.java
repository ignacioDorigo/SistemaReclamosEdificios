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
	public void agregarPersona(@RequestParam String documento, @RequestParam String nombre) throws PersonaException {
		controlador.agregarPersona(documento, nombre);
	}
	
	@DeleteMapping("/eliminarPersona")
	public void eliminarPersona(@RequestParam String documento) throws PersonaException{
		controlador.eliminarPersona(documento);
	}

}
