package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.controlador.Controlador;
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

@SpringBootApplication
public class SistemaReclamosEdificiosApplication implements CommandLineRunner {

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

	@Autowired
	Controlador controlador;

	public static void main(String[] args) {
		SpringApplication.run(SistemaReclamosEdificiosApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Scanner scan = new Scanner(System.in);
		Integer opcion = 0;
		while (opcion != -1) {
			mostrarOpciones();
			System.out.print("SU OPCION: ");
			opcion = scan.nextInt();
			System.out.println("");
			if (opcion == 1) {
				System.out.println("----------- EDIFICIOS -----------");
//				mostrarEdificioView(controlador.getEdificios());
				mostrarEdificios();
			} else if (opcion == 2) {
				System.out.println("----------- PERSONAS -----------");
				mostrarPersonas();
			} else if (opcion == 3) {
				System.out.println("----------- IMAGENES -----------");
				mostrarImagenes();
			} else if (opcion == 4) {
				System.out.println("----------- RECLAMOS -----------");
				mostrarReclamos();
			} else if (opcion == 5) {
				System.out.println("----------- UNIDADES -----------");
				mostrarUnidades();
			} else if (opcion == 6) { // agregar edificio
				int codigo = 10;
				String nombreEdificio = "Tower Puerto Madero Club";
				String direccion = "Costanera NorteSur 2020";
				controlador.agregarEdificio(codigo, nombreEdificio, direccion);
			} else if (opcion == 7) { // eliminar edificio
				int codigo = 1;
				controlador.eliminarEdificio(codigo);
			} else if (opcion == 8) {
//				2) 
				int codigoEdificio = 8;
				mostrarUnidadView(controlador.getUnidadesPorEdificio(codigoEdificio));

			} else if (opcion == 9) {
//				3) 
				int codigoEdificio = 8;
				mostrarPersonaView(controlador.habilitadosPorEdificio(codigoEdificio));

			} else if (opcion == 10) {
//				4) 
				int codigoEdificio = 1;
				mostrarPersonaView(controlador.dueniosPorEdificio(codigoEdificio));

			} else if (opcion == 11) {
//				5)
				int codigoEdificio = 1;
				mostrarPersonaView(controlador.habitantesPorEdificio(codigoEdificio));

			} else if (opcion == 12) {
//				6) 
				int codigoEdificio = 1;
				String piso = "1";
				String numero = "1";
				mostrarPersonaView(controlador.dueniosPorUnidad(codigoEdificio, piso, numero));

			} else if (opcion == 13) {
//				7) 
				int codigoEdificio = 6;
				String piso = "1";
				String numero = "1";
				mostrarPersonaView(controlador.inquilinosPorUnidad(codigoEdificio, piso, numero));

			} else if (opcion == 14) {
//				8)
				int codigoEdificio = 2;
				String piso = "10";
				String numero = "6";
				String documento = "DNI42411691";
				controlador.transferirUnidad(codigoEdificio, piso, numero, documento);

			} else if (opcion == 15) {

//				9)
				int codigoEdificio = 1;
				String piso = "1";
				String numero = "6";
				String documento = "DNI42411691";
				controlador.alquilarUnidad(codigoEdificio, piso, numero, documento);

			} else if (opcion == 16) {
//				10) 
				int codigoEdificio = 1;
				String piso = "1";
				String numero = "1";
				String documento = "DNI30161468";
				controlador.agregarDuenioUnidad(codigoEdificio, piso, numero, documento);

			} else if (opcion == 17) {
//				11) 
				int codigoEdificio = 1;
				String piso = "10";
				String numero = "6";
				String documento = "DNI42411691";
				controlador.agregarInquilinoUnidad(codigoEdificio, piso, numero, documento);
				controlador.agregarInquilinoUnidad(codigoEdificio, "1", "1", "DNI30662769");

			} else if (opcion == 18) {
//				12) 
				int codigoEdificio = 1;
				String piso = "10";
				String numero = "6";
				controlador.liberarUnidad(codigoEdificio, piso, numero);

			} else if (opcion == 19) {
//				13) 
				int codigoEdificio = 1;
				String piso = "1";
				String numero = "1";
				controlador.habitarUnidad(codigoEdificio, piso, numero);

			} else if (opcion == 20) {
//				14)
				String documento = "DNI44340534";
				String nombre = "POTTI, FACUNDO";
				controlador.agregarPersona(documento, nombre);

			} else if (opcion == 21) {
//				15)
				String documento = "DNI42411691";
				controlador.eliminarPersona(documento);

			} else if (opcion == 22) {
//				16)
				int codigoEdificio = 3;
				mostrarReclamoView(controlador.reclamosPorEdificio(codigoEdificio));

			} else if (opcion == 23) {
//				17)
				int codigoEdificio = 1;
				String piso = "1";
				String numero = "1";
				mostrarReclamoView(controlador.reclamosPorUnidad(codigoEdificio, piso, numero));

			} else if (opcion == 24) {
//				18)
				int numeroReclamo = 5;
				System.out.println(controlador.reclamosPorNumero(numeroReclamo));

			} else if (opcion == 25) {
//				19) 
				String documento = "DNI30314545";
				mostrarReclamoView(controlador.reclamosPorPersona(documento));

			} else if (opcion == 26) {
//				20)
				int codigoEdificio = 2;
				String pisoUnidad = "10";
				String numeroUnidad = "6";
				String documento = "DNI42411691";
				String ubicacionReclamo = "cocina";
				String descripcionReclamo = "gotera en el techo";
				controlador.agregarReclamo(codigoEdificio, pisoUnidad, numeroUnidad, documento, ubicacionReclamo,
						descripcionReclamo);
			} else if (opcion == 27) {
//				21)
				int numeroReclamo = 5;
				String path = "C//users/escritorio/fotoRotura.jpg";
				String tipo = "JPG";
				String documentoAgregaImagen = "DNI42411691";
				controlador.agregarImagenAReclamo(numeroReclamo, path, tipo, documentoAgregaImagen);

			} else if (opcion == 28) {
//				22)
				int numeroReclamo = 5;
				Estado nuevoEstado = Estado.anulado;
				controlador.cambiarEstado(numeroReclamo, nuevoEstado);

			}
			System.out.println();
		}
	}

	// Metodo para mostrar las List<PersonaView>
	public void mostrarPersonaView(List<PersonaView> personas) {
		if (personas != null) {
			for (PersonaView persona : personas) {
				System.out.println(persona);

			}
		}
	}

	// Metodo para mostrar las List<EdificioView>
	public void mostrarEdificioView(List<EdificioView> edificios) {
		if (edificios != null) {
			for (EdificioView edificio : edificios) {
				System.out.println(edificio);
			}
		}
	}

	// Metodo para mostrar las List<ReclamoView>
	public void mostrarReclamoView(List<ReclamoView> reclamos) {
		if (reclamos != null) {
			for (ReclamoView reclamo : reclamos) {
				System.out.println(reclamo);
			}
		}
	}

	// Metodo para mostrar las List<ReclamoView>
	public void mostrarUnidadView(List<UnidadView> unidades) {
		if (unidades != null) {
			for (UnidadView unidad : unidades) {
				System.out.println(unidad);
			}
		}
	}

	public void mostrarPersonas() {
		List<Persona> personas = repoPersona.findAll();
		for (Persona persona : personas) {
			System.out.println(persona);
		}
	}

	public void mostrarEdificios() {
		List<Edificio> edificios = repoEdificio.findAll();
		for (Edificio edificio : edificios) {
			System.out.println(edificio);
		}
	}

	public void mostrarImagenes() {
		List<Imagen> imagenes = repoImagen.findAll();
		for (Imagen imagen : imagenes) {
			System.out.println(imagen);
		}
	}

	public void mostrarReclamos() {
		List<Reclamo> reclamos = repoReclamo.findAll();
		for (Reclamo reclamo : reclamos) {
			System.out.println(reclamo);
		}
	}

	public void mostrarUnidades() {
		List<Unidad> unidades = repoUnidad.findAll();
		for (Unidad unidad : unidades) {
			System.out.println(unidad);
		}
	}

	public void mostrarOpciones() {
		System.out.println("---------------------- PROGRAMA DE RECLAMOS ---------------------- ");
		System.out.println("1) Mostrar Edificios ");
		System.out.println("2) Mostrar Personas ");
		System.out.println("3) Mostrar Imagenes ");
		System.out.println("4) Mostrar Reclamos ");
		System.out.println("5) Mostrar Unidades ");
		System.out.println("6) Agregar Edificio ");
		System.out.println("7) Eliminar Edificio ");
		System.out.println("8) Mostrar unidades por edificio");
		System.out.println("9) Mostrar habilitados por edificio");
		System.out.println("10) Mostrar duenios por edificio");
		System.out.println("11) Mostrar habitantes por edificio");
		System.out.println("12) Mostrar duenios por unidad");
		System.out.println("13) Mostrar inquilinos por unidad");
		System.out.println("14) Transferir unidad");
		System.out.println("15) Alquilar unidad");
		System.out.println("16) Agregar duenio a unidad");
		System.out.println("17) Agregar inquilino a unidad");
		System.out.println("18) Liberar unidad");
		System.out.println("19) Habitar unidad");
		System.out.println("20) Agregar Persona");
		System.out.println("21) Eliminar Persona");
		System.out.println("22) Reclamos por edificio");
		System.out.println("23) Reclamos por unidad");
		System.out.println("24) Reclamos por numero reclamo");
		System.out.println("25) Reclamos por Persona(documento)");
		System.out.println("26) Agregar reclamo");
		System.out.println("27) Agregar Imagen a Reclamo");
		System.out.println("28) Cambiar estado reclamo");
		System.out.println(" -1 PARA TERMINAR");
	}

}
