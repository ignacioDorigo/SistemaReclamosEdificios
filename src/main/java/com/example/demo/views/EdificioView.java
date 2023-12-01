package com.example.demo.views;

public class EdificioView {

	private int codigo;
	private String nombre;
	private String direccion;

	public EdificioView() {
	}

	public EdificioView(int codigo, String nombre, String direccion) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.direccion = direccion;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	@Override
	public String toString() {
		return "EdificioView [codigo=" + codigo + ", nombre=" + nombre + ", direccion=" + direccion + "]";
	}

}
