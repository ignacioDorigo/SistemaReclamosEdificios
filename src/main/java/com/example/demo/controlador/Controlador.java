package com.example.demo.controlador;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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
import com.example.demo.views.ImagenView;
import com.example.demo.views.PersonaView;
import com.example.demo.views.ReclamoView;
import com.example.demo.views.UnidadView;

@Controller
public class Controlador {

	@Autowired
	EdificioRepository edificioRepository;

	@Autowired
	ImagenRepository imagenRepository;

	@Autowired
	PersonaRepository personaRepository;

	@Autowired
	ReclamoRepository reclamoRepository;

	@Autowired
	UnidadRepository unidadRepository;

	private static Controlador instancia;

	private Controlador() {
	}

	public static Controlador getInstancia() {
		if (instancia == null)
			instancia = new Controlador();
		return instancia;
	}

	// 1 Listo REST
	public List<EdificioView> getEdificios() {
		List<EdificioView> resultado = new ArrayList<EdificioView>();
		try {
			List<Edificio> edificios = edificioRepository.findAll();
			for (Edificio edificio : edificios) {
				EdificioView ediView = edificio.toView();
				resultado.add(ediView);
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

		return resultado;
	}

	// 2 Listo REST
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

	// 3 Listo REST
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

	// 4 Listo REST
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

	// 5 Listo REST
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

	// 6 Listo REST
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

	// 7 Listo REST
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

	// 8 Listo REST
	public void transferirUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			if (unidad != null && persona != null) {
				unidad.transferir(persona);// falta hacer update
				unidadRepository.save(unidad);
				System.out.println("UNIDAD TRANSFERIDA");
			} else {
				System.out.println("LA UNIDAD O LA PERSONA NO EXISTE");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 9 Listo REST
	public void agregarDuenioUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			unidad.agregarDuenio(persona);
			unidadRepository.save(unidad);
			System.out.println("Duenio agregado a la unidad");
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 10 Listo REST
	public void alquilarUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			System.out.println(unidad);//
			Persona persona = buscarPersona(documento);
			System.out.println(persona);//
			if (unidad != null && persona != null) {
				if (unidad.estaHabitado() == false) {
					unidad.alquilar(persona);
					unidadRepository.save(unidad);
					System.out.println("Unidad alquilada");
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 11 Listo REST
	public void agregarInquilinoUnidad(int codigo, String piso, String numero, String documento)
			throws UnidadException, PersonaException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			Persona persona = buscarPersona(documento);
			if (persona != null && unidad != null && unidad.estaHabitado() != false) {// considerar casos repetidos
				unidad.agregarInquilino(persona);
				unidadRepository.save(unidad);
				System.out.println("Inquilino agregado");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	// 12 Listo REST
	public void liberarUnidad(int codigo, String piso, String numero) throws UnidadException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			if (unidad.estaHabitado()) {
				unidad.liberar();
				unidadRepository.save(unidad);
				System.out.println("Unidad liberada");
			} else {
				System.out.println("la unidad ya estaba deshabitada");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 13 Listo REST
	public void habitarUnidad(int codigo, String piso, String numero) throws UnidadException {
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			if (unidad.estaHabitado() == false) {
				unidad.habitar();
				unidadRepository.save(unidad);
				System.out.println("La unidad se habito");
			} else {
				System.out.println("La unidad ya estaba habitada");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 14 Listo REST
	public void agregarPersona(String documento, String nombre) throws PersonaException {
		try {
			Persona persona = new Persona(documento, nombre, null, null);
			Persona posible = buscarPersona(documento);
			if (posible == null) {
				personaRepository.save(persona);
				System.out.println("Persona agregada");
			} else {
				System.out.println("La persona ya esta en la BD");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// 15 Listo REST
	public void eliminarPersona(String documento) throws PersonaException {
		try {
			Persona persona = buscarPersona(documento);
			if (persona != null) {
				List<Reclamo> reclamos = reclamoRepository.findAll();
				for (Reclamo r : reclamos) {
					if (r.getUsuario().getDocumento().equals(documento)) {
						reclamoRepository.deleteById(r.getNumero());
					}
				}
				personaRepository.deleteById(documento);
				System.out.println("Persona eliminada");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 16 Listo REST
	public List<ReclamoView> reclamosPorEdificio(int codigo) throws EdificioException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		try {

			Edificio edificio = buscarEdificio(codigo);
			if (edificio != null) {
				List<Reclamo> reclamos = reclamoRepository.findByEdificio(edificio);
				for (Reclamo reclamo : reclamos) {
					resultado.add(reclamo.toView());
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return resultado;
	}

	// 17 Listo REST
	public List<ReclamoView> reclamosPorUnidad(int codigo, String piso, String numero) throws UnidadException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		try {
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			if (unidad != null) {
				List<Reclamo> reclamos = reclamoRepository.findByUnidad(unidad);
				for (Reclamo reclamo : reclamos) {
					resultado.add(reclamo.toView());
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return resultado;
	}

	// 18 Listo REST
	public ReclamoView reclamosPorNumero(int numero) {
		Optional<Reclamo> reclamoOptional = reclamoRepository.findById(numero);
		if (reclamoOptional.isPresent()) {
			Reclamo reclamo = reclamoOptional.get();
			ReclamoView resultado = reclamo.toView();
			return resultado;
		}
		return null;
	}

	// 19 Listo REST
	public List<ReclamoView> reclamosPorPersona(String documento) throws PersonaException {
		List<ReclamoView> resultado = new ArrayList<ReclamoView>();
		try {
			Persona persona = buscarPersona(documento);
			if (persona != null) {
				List<Reclamo> reclamos = reclamoRepository.findByUsuario(persona);
				for (Reclamo reclamo : reclamos) {
					resultado.add(reclamo.toView());
				}
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getLocalizedMessage());
		}

		return resultado;
	}

	// 20 Listo REST
	// Solo va a poder agregar un reclamo la persona que sea inquilino o duenio de
	// la unidad
	// modifique 1/12
	public int agregarReclamo(int codigo, String piso, String numero, String documento, String ubicacion,
			String descripcion) throws EdificioException, UnidadException, PersonaException {
		try {
			Edificio edificio = buscarEdificio(codigo);
			System.out.println(edificio);
			Unidad unidad = buscarUnidad(codigo, piso, numero);
			System.out.println(unidad);
			Persona persona = buscarPersona(documento);
			System.out.println(persona);
			if (persona == null) {
				System.out.println("NO SE AGREGO EL RECLAMO PORQUE LA PERSONA NO EXISTE");
				return -1;
			} else if (esDuenio(unidad.getDuenios(), persona) || esInquilino(unidad.getInquilinos(), persona)) {
				// si entra aca es duenio,inquilino o ambos
				// entonces puede crear un reclamo
				Reclamo reclamo = new Reclamo(persona, edificio, ubicacion, descripcion, unidad);
				reclamoRepository.save(reclamo);
				System.out.println("Reclamo Agregado");
				return reclamo.getNumero();
			} else {
				System.out.println("NO SE AGREGO EL RECLAMO PORQUE LA PERSONA NO ES DUENIO  O INQUILINO");
			}

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
		return -1;
	}

	// agregue 1/12
	public boolean esDuenio(List<Persona> duenios, Persona persona) {
		String documentoPersona = persona.getDocumento();
		for (Persona duenio : duenios) {
			String documentoDuenio = duenio.getDocumento();
			if (documentoDuenio.equals(documentoPersona)) {
				return true; // Si entra aca, es porque recorrio los duenios y alguno tiene el mismo dni
			}
		}
		return false;
	}

	// agregue 1/12
	public boolean esInquilino(List<Persona> inquilinos, Persona persona) {
		String documentoPersona = persona.getDocumento();
		for (Persona inquilino : inquilinos) {
			String documentoInquilino = inquilino.getDocumento();
			if (documentoInquilino.equals(documentoPersona)) {
				return true; // Si entra aca, es porque recorrio los inquilinos y alguno tiene el mismo dni
			}
		}
		return false;
	}

	// 21 Listo REST (modifique 1/12)
	public void agregarImagenAReclamo(int numero, String direccion, String tipo, String documento)
			throws ReclamoException {
		try {
			Reclamo reclamo = buscarReclamo(numero);
			if (reclamo != null) { // vericamos que el reclamo exista
				String dniCreadorReclamo = reclamo.getUsuario().getDocumento();
				if (dniCreadorReclamo.equals(documento)) {
					reclamo.agregarImagen(direccion, tipo);
					System.out.println("Imagen Guardada");
					reclamoRepository.save(reclamo);
				} else {
					System.out.println("No sos el creador de este reclamo, no podes agregar imagen");
				}

			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}
	}

	// 22 solo lo va a poder hacer el admin (hay que modificar 1/12)
	public void cambiarEstado(int numero, Estado estado) throws ReclamoException {
		try {
			Reclamo reclamo = buscarReclamo(numero);
			if (reclamo != null) {
				reclamo.cambiarEstado(estado);
				reclamoRepository.save(reclamo);
				System.out.println("ESTADO DEL RECLAMO MODIFICADO");
			}
		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	// Listo (NO SE SI HAY QUE HACER REST)
	private Edificio buscarEdificio(int codigo) throws EdificioException {
		Optional<Edificio> edificioOptional = edificioRepository.findById(codigo);
		if (edificioOptional.isPresent()) {
			Edificio edificio = edificioOptional.get();
			return edificio;
		}
		return null;
	}

	// Listo
	private Unidad buscarUnidad(int codigo, String piso, String numero) throws UnidadException {
		Optional<Edificio> optionalEdificio = edificioRepository.findById(codigo);
		if (optionalEdificio.isPresent()) {
			Edificio edificio = optionalEdificio.get();
			Optional<Unidad> unidadOptional = unidadRepository.findByEdificioAndPisoAndNumero(edificio, piso, numero);
			if (unidadOptional.isPresent()) {
				Unidad unidad = unidadOptional.get();
				return unidad;
			}
		}

		return null;
	}

	// Listo
	private Persona buscarPersona(String documento) throws PersonaException {
		Optional<Persona> personaOptional = personaRepository.findById(documento);
		if (personaOptional.isPresent()) {
			Persona persona = personaOptional.get();
			return persona;
		}
		return null;
	}

	// Listo
	private Reclamo buscarReclamo(int numero) throws ReclamoException {
		Optional<Reclamo> reclamoOptional = reclamoRepository.findById(numero);
		if (reclamoOptional.isPresent()) {
			Reclamo reclamo = reclamoOptional.get();
			return reclamo;
		}
		return null;
	}

	// Extra
	public List<ImagenView> buscarImagenesPorNumeroReclamo(int idReclamo) throws ReclamoException {
		List<ImagenView> resultado = new ArrayList<ImagenView>();
		try {
			Reclamo reclamo = buscarReclamo(idReclamo);
			if (reclamo != null) {
				List<Imagen> imagenes = reclamo.getImagenes();
				for (Imagen imagen : imagenes) {
					resultado.add(imagen.toView());
				}
			}
			return resultado;
		} catch (Exception e) {
			System.out.println("Error " + e.getMessage());
		}
		return resultado;
	}

	public List<String> buscarUrlPorReclamo(int idReclamo) {
		List<String> urls = new ArrayList<String>();
		try {
			Reclamo reclamo = buscarReclamo(idReclamo);
			if (reclamo != null) {
				List<Imagen> imagenes = reclamo.getImagenes();
				for (Imagen imagen : imagenes) {
					urls.add(imagen.getDireccion());
				}
			}
			return urls;
		} catch (Exception e) {
			System.out.println("Error " + e.getMessage());
		}
		return urls;
	}

	// Hay que hacer rest (agregue 1/12)
	public void agregarEdificio(int codigo, String nombre, String direccion) {
		List<Edificio> edificios = edificioRepository.findAll();
		boolean sePuedeCrear = true;
		for (Edificio edificio : edificios) {
			if (mismaDireccionOcodigo(codigo, direccion, edificio)) {
				sePuedeCrear = false;
				break;
			}
		}
		if (sePuedeCrear == false) {
			System.out.println("No se puede crear ya que el codigo o direccion esta repetido ");
		} else {
			Edificio nuevo = new Edificio(codigo, nombre, direccion);
			edificioRepository.save(nuevo);
		}
	}

	public void eliminarEdificio(int codigo) {
		if (edificioRepository.existsById(codigo)) {// Si existe ese codigo de edifcio en la bd
			List<Reclamo> reclamos = reclamoRepository.findAll();
			for (Reclamo r : reclamos) {
				if (r.getEdificio().getCodigo() == codigo) {
					reclamoRepository.deleteById(r.getNumero()); // borramos los reclamos asociados a ese edificio
				}
			}
			System.out.println("El edificio se ha eliminado");
			edificioRepository.deleteById(codigo);
		} else {
			System.out.println("El edificio con ese codigo no existe");
		}

	}

	// Hay que verificar que no pueda haber 2
	// edificios con el mismo codigo ni direccion
	// si da true es porque esta repetido algun dato
	public boolean mismaDireccionOcodigo(int codigo, String direccion, Edificio edificio) {
		if (edificio.getCodigo() == codigo || edificio.getDireccion().equals(direccion)) {
			return true;
		}
		return false;
	}

}