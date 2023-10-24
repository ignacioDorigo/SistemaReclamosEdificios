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
//		Muestra de datos

//		mostrarPersonas();
//		mostrarEdificios();
//		mostrarImagenes();
//		mostrarReclamos();
//		mostrarUnidades();

//		1)
//		mostrarEdificioView(controlador.getEdificios());
//
//		2) 
//		mostrarUnidadView(controlador.getUnidadesPorEdificio(8));
//
//		3) 
//		mostrarPersonaView(controlador.habilitadosPorEdificio(7));
//
//		4) 
//		mostrarPersonaView(controlador.dueniosPorEdificio(1));
//
//		5)
//		mostrarPersonaView(controlador.habitantesPorEdificio(1));
//
//		6) 
//		mostrarPersonaView(controlador.dueniosPorUnidad(1, "1", "1"));
//
//		7) 
//		mostrarPersonaView(controlador.inquilinosPorUnidad(6, "1", "1"));
//
//		8) 
//		controlador.transferirUnidad(1, "10", "6", "DNI44007547");

//		9) 
//		controlador.alquilarUnidad(1, "1", "6", "DNI44007547");
//
//		10) 
//		controlador.agregarDuenioUnidad(1, "1", "1", "DNI30161468");
//
//		11) 
//		controlador.agregarInquilinoUnidad(1, "10", "6", "DNI44007547");
//		controlador.agregarInquilinoUnidad(1, "1", "1", "DNI30662769");
//
//		12) 
//		controlador.liberarUnidad(1, "10", "6");
//
//		13) 
//		controlador.habitarUnidad(1, "1", "1");
//
//		14)
//		controlador.agregarPersona("DNI44007547", "SACK, NICOLAS");
//
//		15)
//		controlador.eliminarPersona("DNI42411691");
//
//		16)
//		mostrarReclamoView(controlador.reclamosPorEdificio(3));
//
//		17)
//		mostrarReclamoView(controlador.reclamosPorUnidad(1, "1", "1"));
//
//		18)
//		System.out.println(controlador.reclamosPorNumero(5));
//
//		19) 
//		mostrarReclamoView(controlador.reclamosPorPersona("DNI30314545"));
//
//		20)
//		controlador.agregarReclamo(1, "10", "6", "DNI30314545", "cocina", "gotera en el techo");
//
//		21)
//		controlador.agregarImagenAReclamo(5, "C//users/escritorio/fotoRotura.jpg","JPG");
//
//		22)
//		controlador.cambiarEstado(5, Estado.abierto);

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

}
