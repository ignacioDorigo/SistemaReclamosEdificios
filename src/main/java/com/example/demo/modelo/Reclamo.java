package com.example.demo.modelo;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Imagen;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Unidad;
import com.example.demo.views.Estado;
import com.example.demo.views.ReclamoView;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "reclamos")
public class Reclamo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idreclamo")
	private int numero;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "documento")
	private Persona usuario;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "codigo")
	private Edificio edificio;

	@Basic
	private String ubicacion;

	@Column(length = 1000)
	private String descripcion;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "identificador")
	private Unidad unidad;

	@Enumerated(EnumType.STRING)
	private Estado estado;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "reclamo")
	private List<Imagen> imagenes;

	public Reclamo() {

	}

	public Reclamo(Persona usuario, Edificio edificio, String ubicacion, String descripcion, Unidad unidad) {
		this.usuario = usuario;
		this.edificio = edificio;
		this.ubicacion = ubicacion;
		this.descripcion = descripcion;
		this.unidad = unidad;
		this.estado = Estado.nuevo;
		imagenes = new ArrayList<Imagen>();
	}

	public void agregarImagen(String direccion, String tipo) {
		Imagen imagen = new Imagen(direccion, tipo);
		imagenes.add(imagen);

		// Para FK
		imagen.setReclamo(this);
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public Persona getUsuario() {
		return usuario;
	}

	public Edificio getEdificio() {
		return edificio;
	}

	public String getUbicacion() {
		return ubicacion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public Unidad getUnidad() {
		return unidad;
	}

	public Estado getEstado() {
		return estado;
	}

	public List<Imagen> getImagenes() {
		return this.imagenes;
	}

	public void cambiarEstado(Estado estado) {
		this.estado = estado;
	}

	public void setUsuario(Persona usuario) {
		this.usuario = usuario;
	}

	public void setEdificio(Edificio edificio) {
		this.edificio = edificio;
	}

	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public void setUnidad(Unidad unidad) {
		this.unidad = unidad;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public void setImagenes(List<Imagen> imagenes) {
		this.imagenes = imagenes;
	}

	public ReclamoView toView() {
		ReclamoView reclamoView = new ReclamoView(numero, usuario.toView(), edificio.toView(), ubicacion, descripcion,
				unidad.toView(), estado);
		return reclamoView;
	}

	@Override
	public String toString() {
		return "Reclamo [numero=" + numero + ", usuario=" + usuario.getDocumento() + ", edificio="
				+ edificio.getCodigo() + ", ubicacion=" + ubicacion + ", descripcion=" + descripcion + ", unidad="
				+ unidad.getId() + ", estado=" + estado + "]";
	}

}
