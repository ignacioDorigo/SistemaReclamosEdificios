package com.example.demo.controladoresRest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.views.PersonaView;

@RestController
@RequestMapping("/unidades")
public class UnidadController {

	@Autowired
	Controlador controlador;

	@GetMapping("/listarDueniosPorUnidad/{codigo}/{piso}/{numero}")
	public List<PersonaView> dueniosPorUnidad(@PathVariable int codigo, @PathVariable String piso,
			@PathVariable String numero) throws UnidadException {
		return controlador.dueniosPorUnidad(codigo, piso, numero);
	}

	@GetMapping("/listarInquilinosPorUnidad")
	public List<PersonaView> inquilinosPorUnidad(@PathVariable int codigo, @PathVariable String piso,
			@PathVariable String numero) throws UnidadException {
		return controlador.inquilinosPorUnidad(codigo, piso, numero);
	}

	@PostMapping("/transferirUnidad")
	public void transferirUnidad(@RequestParam int codigo, @RequestParam String piso, @RequestParam String numero,
			@RequestParam String documento) throws UnidadException, PersonaException {
		controlador.transferirUnidad(codigo, piso, numero, documento);
		return;
	}

	@PostMapping("/agregarDuenioUnidad")
	public void agregarDuenioUnidad(@RequestParam int codigo, @RequestParam String piso, @RequestParam String numero,
			@RequestParam String documento) throws UnidadException, PersonaException {
		controlador.agregarDuenioUnidad(codigo, piso, numero, documento);
	}

	@PostMapping("/alquilarUnidad")
	public void alquilarUnidad(@RequestParam int codigo, @RequestParam String piso, @RequestParam String numero,
			@RequestParam String documento) throws UnidadException, PersonaException {
		controlador.alquilarUnidad(codigo, piso, numero, documento);
	}
	
	@PostMapping("/alquilarUnidad2/{codigo}/{piso}/{numero}/{documento}")
	public void alquilarUnidad2(@PathVariable int codigo, @PathVariable String piso, @PathVariable String numero,
			@PathVariable String documento) throws UnidadException, PersonaException {
		controlador.alquilarUnidad(codigo, piso, numero, documento);
	}

	@PostMapping("/agregarInquilinoUnidad")
	public void agregarInquilinoUnidad(@RequestParam int codigo, @RequestParam String piso, @RequestParam String numero,
			@RequestParam String documento) throws UnidadException, PersonaException {
		controlador.agregarInquilinoUnidad(codigo, piso, numero, documento);
	}

	@DeleteMapping("/liberarUnidad")
	public void liberarUnidad(@RequestParam int codigo, @RequestParam String piso, @RequestParam String numero)
			throws UnidadException {
		controlador.liberarUnidad(codigo, piso, numero);
	}

	@PutMapping("/habitarUnidad/{codigo}/{piso}/{numero}")
	public void habitarUnidad(@PathVariable int codigo, @PathVariable String piso, @PathVariable String numero)
			throws UnidadException {
		controlador.habitarUnidad(codigo, piso, numero);
	}
	
	

}
