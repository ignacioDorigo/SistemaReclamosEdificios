package com.example.demo.controladoresRest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.EdificioException;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.ReclamoException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.views.Estado;
import com.example.demo.views.ReclamoView;

@RestController
@RequestMapping("/reclamos")
public class ReclamoController {

	@Autowired
	Controlador controlador;

	@GetMapping("/reclamosPorEdificio/{codigo}")
	public List<ReclamoView> reclamosPorEdificio(@PathVariable int codigo) throws EdificioException {
		return controlador.reclamosPorEdificio(codigo);
	}

	@GetMapping("/reclamosPorUnidad/{codigo}/{piso}/{numero}")
	public List<ReclamoView> reclamosPorUnidad(@PathVariable int codigo, @PathVariable String piso,
			@PathVariable String numero) throws UnidadException {
		return controlador.reclamosPorUnidad(codigo, piso, numero);
	}

	@GetMapping("/reclamosPorNumero/{numero}")
	public ReclamoView reclamosPorNumero(@PathVariable int numero) {
		return controlador.reclamosPorNumero(numero);
	}

	@GetMapping("/reclamosPorPersona/{documento}")
	public List<ReclamoView> reclamosPorPersona(@PathVariable String documento) throws PersonaException {
		return controlador.reclamosPorPersona(documento);
	}

	@PostMapping("/agregarReclamo")
	public int agregarReclamo(@RequestParam int codigo, @RequestParam String piso, @RequestParam String numero,
			@RequestParam String documento, @RequestParam String ubicacion, @RequestParam String descripcion)
			throws EdificioException, UnidadException, PersonaException {
		return controlador.agregarReclamo(codigo, piso, numero, documento, ubicacion, descripcion);
	}

	@PostMapping("/agregarImagenAReclamo")
	public void agregarImagenAReclamo(@RequestParam int numero, @RequestParam String direccion,
			@RequestParam String tipo, @RequestParam String documento) throws ReclamoException {
		controlador.agregarImagenAReclamo(numero, direccion, tipo, documento);
	}

	@PutMapping("/cambiarEstado")
	public boolean cambiarEstado(@RequestParam int numero, @RequestParam Estado estado) throws ReclamoException {
		return controlador.cambiarEstado(numero, estado);
	}
}
