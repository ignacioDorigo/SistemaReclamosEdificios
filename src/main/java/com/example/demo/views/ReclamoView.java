package com.example.demo.views;

import java.util.List;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Unidad;

public class ReclamoView {

	private int numero;
	private PersonaView usuario;
	private EdificioView edificio;
	private String ubicacion;
	private String descripcion;
	private UnidadView unidad;
	private Estado estado;
	private List<ImagenView> imagenes;

	public ReclamoView() {

	}

	public ReclamoView(int numero, String ubicacion, String descripcion, Estado estado) {
		super();
		this.numero = numero;
		this.ubicacion = ubicacion;
		this.descripcion = descripcion;
		this.estado = estado;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public PersonaView getUsuario() {
		return usuario;
	}

	public void setUsuario(PersonaView usuario) {
		this.usuario = usuario;
	}

	public EdificioView getEdificio() {
		return edificio;
	}

	public void setEdificio(EdificioView edificio) {
		this.edificio = edificio;
	}

	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public UnidadView getUnidad() {
		return unidad;
	}

	public void setUnidad(UnidadView unidad) {
		this.unidad = unidad;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public List<ImagenView> getImagenes() {
		return imagenes;
	}

	public void setImagenes(List<ImagenView> imagenes) {
		this.imagenes = imagenes;
	}

	public String toString() {
		return numero + " " + ubicacion + " " + descripcion + " " + estado;
	}

}
