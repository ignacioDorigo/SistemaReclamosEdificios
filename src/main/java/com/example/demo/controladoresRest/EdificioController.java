package com.example.demo.controladoresRest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controlador.Controlador;
import com.example.demo.exceptions.EdificioException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Reclamo;
import com.example.demo.views.EdificioView;
import com.example.demo.views.PersonaView;
import com.example.demo.views.UnidadView;

@RestController
@RequestMapping("/edificios")
public class EdificioController {

	@Autowired
	Controlador controlador;

	@GetMapping("/listar")
	public List<EdificioView> getEdificios() {
		return controlador.getEdificios();
	}

	@GetMapping("/listarUnidadesPorEdificio/{codigo}")
	public List<UnidadView> getUnidadesPorEdificio(@PathVariable int codigo) throws EdificioException {
		return controlador.getUnidadesPorEdificio(codigo);
	}

	@GetMapping("/listarHabilitadosPorEdificio/{codigo}")
	public List<PersonaView> habilitadosPorEdificio(@PathVariable int codigo) throws EdificioException {
		return controlador.habilitadosPorEdificio(codigo);
	}

	@GetMapping("/listarDueniosPorEdificio/{codigo}")
	public List<PersonaView> dueniosPorEdificio(@PathVariable int codigo) throws EdificioException {
		return controlador.dueniosPorEdificio(codigo);
	}

	@GetMapping("/listarHabitantesPorEdificio/{codigo}")
	public List<PersonaView> habitantesPorEdificio(@PathVariable int codigo) throws EdificioException {
		return controlador.habitantesPorEdificio(codigo);
	}

	@PostMapping("/agregarEdificio/{codigo}/{nombre}/{direccion}")
	public boolean agregarEdificio(@PathVariable int codigo, @PathVariable String nombre,@PathVariable String direccion) {
		return controlador.agregarEdificio(codigo, nombre, direccion);
	}

	@DeleteMapping("/eliminarEdificio/{codigo}")
	public boolean eliminarEdificio(@PathVariable int codigo) {
		return controlador.eliminarEdificio(codigo);

	}

}