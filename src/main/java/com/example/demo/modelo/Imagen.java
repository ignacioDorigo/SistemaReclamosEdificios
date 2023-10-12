package com.example.demo.modelo;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "imagenes")
public class Imagen {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int numero;

	@Column(name = "path")
	private String direccion;

	@Basic
	private String tipo;

	@ManyToOne
	@JoinColumn(name = "idreclamo")
	private Reclamo reclamo;

	public Imagen() {

	}

	public Imagen(String direccion, String tipo) {
		this.direccion = direccion;
		this.tipo = tipo;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Reclamo getReclamo() {
		return reclamo;
	}

	public void setReclamo(Reclamo reclamo) {
		this.reclamo = reclamo;
	}

	public String toString() {
		String palabra = "NUMERO: " + numero + " , DIRECCION: " + direccion + " , TIPO: " + tipo;
		return palabra;
	}
}
