package com.example.demo.modelo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.example.demo.modelo.Unidad;
import com.example.demo.views.EdificioView;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "edificios")
public class Edificio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codigo;

	@Basic
	private String nombre;

	@Basic
	private String direccion;

	@OneToMany(mappedBy = "edificio", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Unidad> unidades;

	public Edificio() {

	}

	public Edificio(int codigo, String nombre, String direccion) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.direccion = direccion;
		unidades = new ArrayList<Unidad>();
	}

	public void agregarUnidad(Unidad unidad) {
		unidades.add(unidad);
	}

	// Son los duenos e inquilinos
	public Set<Persona> habilitados() {
		Set<Persona> habilitados = new HashSet<Persona>();
		for (Unidad unidad : unidades) {
			List<Persona> duenios = unidad.getDuenios();
			for (Persona p : duenios)
				habilitados.add(p);
			List<Persona> inquilinos = unidad.getInquilinos();
			for (Persona p : inquilinos)
				habilitados.add(p);
		}
		return habilitados;
	}

	public int getCodigo() {
		return codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public List<Unidad> getUnidades() {
		return unidades;
	}

	public Set<Persona> duenios() {
		Set<Persona> resultado = new HashSet<Persona>();
		for (Unidad unidad : unidades) {
			List<Persona> duenios = unidad.getDuenios();
			for (Persona p : duenios)
				resultado.add(p); // aca habia un error, porque decia duenios.add(p)
		}
		return resultado;
	}

	public Set<Persona> habitantes() {
		Set<Persona> resultado = new HashSet<Persona>();
		for (Unidad unidad : unidades) {
			if (unidad.estaHabitado()) {
				List<Persona> inquilinos = unidad.getInquilinos();
				if (inquilinos.size() > 0)
					for (Persona p : inquilinos)
						resultado.add(p);
				else {
					List<Persona> duenios = unidad.getDuenios();
					for (Persona p : duenios)
						resultado.add(p);
				}
			}
		}
		return resultado;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public void setUnidades(List<Unidad> unidades) {
		this.unidades = unidades;
	}

	public EdificioView toView() {
		return new EdificioView(codigo, nombre, direccion);
	}

	@Override
	public String toString() {
		return "Edificio [codigo=" + codigo + ", nombre=" + nombre + ", direccion=" + direccion + "]";
	}

}