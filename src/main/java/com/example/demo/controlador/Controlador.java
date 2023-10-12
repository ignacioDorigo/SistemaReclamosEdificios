package com.example.demo.controlador;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.example.demo.exceptions.EdificioException;
import com.example.demo.exceptions.PersonaException;
import com.example.demo.exceptions.ReclamoException;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Reclamo;
import com.example.demo.modelo.Unidad;
import com.example.demo.repository.EdificioRepository;
import com.example.demo.repository.ImagenRepository;
import com.example.demo.repository.PersonaRepository;
import com.example.demo.repository.ReclamoRepository;
import com.example.demo.repository.UnidadRepository;
import com.example.demo.views.EdificioView;
import com.example.demo.views.Estado;
import com.example.demo.views.PersonaView;
import com.example.demo.views.ReclamoView;
import com.example.demo.views.UnidadView;

@Controller
public class Controlador {

	@Autowired
	EdificioRepository repoEdificio;

	@Autowired
	ImagenRepository repoImagen;

	@Autowired
	PersonaRepository repoPersona;

	@Autowired
	ReclamoRepository repoReclamo;

	@Autowired
	UnidadRepository repoUnidad;

	private static Controlador instancia;

	private Controlador() {
	}

	public static Controlador getInstancia() {
		if (instancia == null)
			instancia = new Controlador();
		return instancia;
	}

	// 1 Listo
	public List<EdificioView> getEdificios() {
		List<EdificioView> resultado = new ArrayList<EdificioView>();
		try {
			List<Edificio> edificios = repoEdificio.findAll();
			for (Edificio edificio : edificios) {
				EdificioView ediView = edificio.toView();
				resultado.add(ediView);
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

		return resultado;
	}

	// 2 Listo
	public List<UnidadView> getUnidadesPorEdificio(int codigo) throws EdificioException {
		List<UnidadView> resultado = new ArrayList<UnidadView>();
		try {
			Edificio edificio = buscarEdificio(codigo);
			List<Unidad> unidades = edificio.getUnidades();
			for (Unidad unidad : unidades)
				resultado.add(unidad.toView());
		} catch (Exception e) {
			System.out.println("No existe ese codigo edificio");
			System.out.println("Error: " + e.getMessage());
		}

		return resultado;
	}

	// 3 Listo
	public List<PersonaView> habilitadosPorEdificio(int codigo) throws EdificioException {
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		try {
			Edificio edificio = buscarEdificio(codigo);
			Set<Persona> habilitados = edificio.habilitados();
			for (Persona persona : habilitados)
				resultado.add(persona.toView());
		} catch (Exception e) {
			System.out.println("No existe ese codigo edificio");
			System.out.println("Error: " + e.getMessage());
		}

		return resultado;
	}

	// 4 Listo
	public List<PersonaView> dueniosPorEdificio(int codigo) throws EdificioException {
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		try {
			Edificio edificio = buscarEdificio(codigo);
			Set<Persona> duenios = edificio.duenios();
			for (Persona persona : duenios)
				resultado.add(persona.toView());
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return resultado;

	}

	// 5 Listo
	public List<PersonaView> habitantesPorEdificio(int codigo) throws EdificioException {
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		try {
			Edificio edificio = buscarEdificio(codigo);
			Set<Persona> habitantes = edificio.duenios();
			for (Persona persona : habitantes)
				resultado.add(persona.toView());
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

		return resultado;
	}

	// 6 Listo
	public List<PersonaView> dueniosPorUnidad(int codigo, String piso, String numero) throws UnidadException {
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			List<Persona> duenios = unidad.getDuenios();
			for (Persona persona : duenios)
				resultado.add(persona.toView());
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return resultado;
	}

	// 7 Listo
	public List<PersonaView> inquilinosPorUnidad(int codigo, String piso, String numero) throws UnidadException {
		List<PersonaView> resultado = new ArrayList<PersonaView>();
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			List<Persona> inquilinos = unidad.getInquilinos();
			for (Persona persona : inquilinos)
				resultado.add(persona.toView());
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

		return resultado;
	}

	// 8 Listo
	public void transferirUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.transferir(persona);// falta hacer update
			repoUnidad.save(unidad);
			System.out.println("UNIDAD TRANSFERIDA");
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 9 Listo
	public void agregarDuenioUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.agregarDuenio(persona);
			repoUnidad.save(unidad);
			System.out.println("DueÃ±o agregado a la unidad");
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 10 Listo
	public void alquilarUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			if (unidad != null && persona != null) {
				if (unidad.estaHabitado() == false) {
					unidad.alquilar(persona);
					repoUnidad.save(unidad);
					System.out.println("Unidad alquilada");
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 11 Listo
	public void agregarInquilinoUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			if (persona != null && unidad != null) {// considerar casos repetidos
				unidad.agregarInquilino(persona);
				repoUnidad.save(unidad);
				System.out.println("Inquilino agregado");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	// 12 Listo
	public void liberarUnidad(int codigo, String piso, String numero) throws UnidadException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			if (unidad.estaHabitado()) {
				unidad.liberar();
				repoUnidad.save(unidad);
				System.out.println("Unidad liberada");
			} else {
				System.out.println("la unidad ya estaba deshabitada");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 13 Listo
	public void habitarUnidad(int codigo, String piso, String numero) throws UnidadException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			if (unidad.estaHabitado() == false) {
				unidad.habitar();
				repoUnidad.save(unidad);
				System.out.println("La unidad se habito");
			} else {
				System.out.println("La unidad ya estaba habitada");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 14 Listo
	public void agregarPersona(String documento, String nombre) throws PersonaException {
		try {
			Persona persona = new Persona(documento, nombre, null, null);
			Persona posible = buscarPersona(documento);
			if (posible == null) {
				repoPersona.save(persona);
				System.out.println("Persona agregada");
			} else {
				System.out.println("La persona ya esta en la BD");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 15 Listo
	public void eliminarPersona(String documento) throws PersonaException {
		try {
			Persona persona = buscarPersona(documento);
			if (persona != null) {
				repoPersona.deleteById(documento);
				System.out.println("Persona eliminada");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 16 Listo
	public List<ReclamoView> reclamosPorEdificio(int codigo) throws EdificioException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		try {

			Edificio edificio = buscarEdificio(codigo);
			if (edificio != null) {
				List<Reclamo> reclamos = repoReclamo.findByEdificio(edificio);
				for (Reclamo reclamo : reclamos) {
					resultado.add(reclamo.toView());
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return resultado;
	}

	// 17 Listo
	public List<ReclamoView> reclamosPorUnidad(int codigo, String piso, String numero) throws UnidadException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			if (unidad != null) {
				List<Reclamo> reclamos = repoReclamo.findByUnidad(unidad);
				for (Reclamo reclamo : reclamos) {
					resultado.add(reclamo.toView());
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return resultado;
	}

	// 18 Listo
	public ReclamoView reclamosPorNumero(int numero) {
		Optional<Reclamo> reclamoOptional = repoReclamo.findById(numero);
		if (reclamoOptional.isPresent()) {
			Reclamo reclamo = reclamoOptional.get();
			ReclamoView resultado = reclamo.toView();
			return resultado;
		}
		return null;
	}

	// 19 Listo
	public List<ReclamoView> reclamosPorPersona(String documento) throws PersonaException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		try {
			Persona persona = buscarPersona(documento);
			if (persona != null) {
				List<Reclamo> reclamos = repoReclamo.findByUsuario(persona);
				for (Reclamo reclamo : reclamos) {
					resultado.add(reclamo.toView());
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getLocalizedMessage());
		}

		return resultado;
	}

	// 20 Listo
	public int agregarReclamo(int codigo, String piso, String numero, String documento, String ubicacion,
			String descripcion) throws EdificioException, UnidadException, PersonaException {
		try {
			Edificio edificio = buscarEdificio(codigo);
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			Reclamo reclamo = new Reclamo(persona, edificio, ubicacion, descripcion, unidad);
			repoReclamo.save(reclamo);
			System.out.println("Reclamo Agregado");
			return reclamo.getNumero();

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return -1;
	}

	// 21 Listo
	public void agregarImagenAReclamo(int numero, String direccion, String tipo) throws ReclamoException {
		try {
			Reclamo reclamo = buscarReclamo(numero);
			if (reclamo != null) {
				reclamo.agregarImagen(direccion, tipo);
				System.out.println("Imagen Guardada");
				repoReclamo.save(reclamo);
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 22
	public void cambiarEstado(int numero, Estado estado) throws ReclamoException {
		try {
			Reclamo reclamo = buscarReclamo(numero);
			if (reclamo != null) {
				reclamo.cambiarEstado(estado);
				repoReclamo.save(reclamo);
				System.out.println("ESTADO DEL RECLAMO MODIFICADO");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// Listo
	private Edificio buscarEdificio(int codigo) throws EdificioException {
		Optional<Edificio> edificioOptional = repoEdificio.findById(codigo);
		if (edificioOptional.isPresent()) {
			Edificio edificio = edificioOptional.get();
			return edificio;
		}
		return null;
	}

	// Listo
	private Unidad buscarUnidad(int codigo, String piso, String numero) throws UnidadException {
		Optional<Edificio> optionalEdificio = repoEdificio.findById(codigo);
		if (optionalEdificio.isPresent()) {
			Edificio edificio = optionalEdificio.get();
			Optional<Unidad> unidadOptional = repoUnidad.findByEdificioAndPisoAndNumero(edificio, piso, numero);
			if (unidadOptional.isPresent()) {
				Unidad unidad = unidadOptional.get();
				return unidad;
			}
		}

		return null;
	}

	// Listo
	private Persona buscarPersona(String documento) throws PersonaException {
		Optional<Persona> personaOptional = repoPersona.findById(documento);
		if (personaOptional.isPresent()) {
			Persona persona = personaOptional.get();
			return persona;
		}
		return null;
	}

	// Listo
	private Reclamo buscarReclamo(int numero) throws ReclamoException {
		Optional<Reclamo> reclamoOptional = repoReclamo.findById(numero);
		if (reclamoOptional.isPresent()) {
			Reclamo reclamo = reclamoOptional.get();
			return reclamo;
		}
		return null;
	}
}
