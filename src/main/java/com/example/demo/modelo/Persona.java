package com.example.demo.modelo;

import com.example.demo.views.PersonaView;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personas")
public class Persona {

	@Id
	private String documento;

	@Basic
	private String nombre;

	@Basic
	private String mail;

	@Column(name = "contrasenia")
	private String password;

	public Persona() {

	}

	public Persona(String documento, String nombre, String mail, String password) {
		this.documento = documento;
		this.nombre = nombre;
		this.mail = crearMail(documento, nombre); // funcion;
		this.password = documento;
	}

	public void cambiarPassword(String password) {
		this.password = password;
	}

	public String getDocumento() {
		return documento;
	}

	public String getNombre() {
		return nombre;
	}

	public String getMail() {
		return mail;
	}

	public String getPassword() {
		return password;
	}

	public void setDocumento(String documento) {
		this.documento = documento;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public PersonaView toView() {
		return new PersonaView(documento, nombre);
	}

	@Override
	public String toString() {
		return "Persona [documento=" + documento + ", nombre=" + nombre + ", mail=" + mail + ", password=" + password
				+ "]";
	}

	public String crearMail(String documento, String nombre) {
		String mailNuevo = "";
		for (int i = 0; i < 3; i++) {
			mailNuevo = mailNuevo + documento.charAt(i);
		}
		for (int i = 0; i < 3; i++) {
			mailNuevo = mailNuevo + nombre.charAt(i);
		}
		mailNuevo = mailNuevo + "@gmail.com";
		return mailNuevo;
	}

}
