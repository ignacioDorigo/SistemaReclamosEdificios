package com.example.demo.modelo;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ColumnTransformer;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Persona;
import com.example.demo.exceptions.UnidadException;
import com.example.demo.views.EdificioView;
import com.example.demo.views.UnidadView;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "unidades")
public class Unidad {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "identificador")
	private int id;

	@Basic
	private String piso;

	@Basic
	private String numero;

	@ColumnTransformer(read = "CASE WHEN habitado = 'S' THEN true ELSE false END", write = "CASE WHEN ? = true THEN 'S' ELSE 'N' END")
	private boolean habitado;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL) // (fetch = FetchType.EAGER)
	@JoinColumn(name = "codigoedificio")
	private Edificio edificio;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "duenios", joinColumns = @JoinColumn(name = "identificador"), inverseJoinColumns = @JoinColumn(name = "documento"))
	private List<Persona> duenios;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "inquilinos", joinColumns = @JoinColumn(name = "identificador"), inverseJoinColumns = @JoinColumn(name = "documento"))
	private List<Persona> inquilinos;

	public Unidad() {

	}

	public Unidad(int id, String piso, String numero, Edificio edificio) {
		this.id = id;
		this.piso = piso;
		this.numero = numero;
		this.habitado = false;
		this.edificio = edificio;
		this.duenios = new ArrayList<Persona>();
		this.inquilinos = new ArrayList<Persona>();
	}

	public void transferir(Persona nuevoDuenio) {
		duenios = new ArrayList<Persona>();
		duenios.add(nuevoDuenio);
	}

	public void agregarDuenio(Persona duenio) {
		duenios.add(duenio);
	}

	public void alquilar(Persona inquilino) throws UnidadException {
		if (!this.habitado) {
			this.habitado = true;
			inquilinos = new ArrayList<Persona>();
			inquilinos.add(inquilino);
		} else
			throw new UnidadException("La unidad esta ocupada");
	}

	public void agregarInquilino(Persona inquilino) {
		inquilinos.add(inquilino);
	}

	public boolean estaHabitado() {
		return habitado;
	}

	public void liberar() {
		this.inquilinos = new ArrayList<Persona>();
		this.habitado = false;
	}

	public void habitar() throws UnidadException {
		if (this.habitado)
			throw new UnidadException("La unidad ya esta habitada");
		else
			this.habitado = true;
	}

	public int getId() {
		return id;
	}

	public String getPiso() {
		return piso;
	}

	public String getNumero() {
		return numero;
	}

	public Edificio getEdificio() {
		return edificio;
	}

	// Devuelve todos los duenos de una unidad
	public List<Persona> getDuenios() {
		return duenios;
	}

	public List<Persona> getInquilinos() {
		return inquilinos;
	}

	public boolean isHabitado() {
		return habitado;
	}

	public void setHabitado(boolean habitado) {
		this.habitado = habitado;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setPiso(String piso) {
		this.piso = piso;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public void setEdificio(Edificio edificio) {
		this.edificio = edificio;
	}

	public void setDuenios(List<Persona> duenios) {
		this.duenios = duenios;
	}

	public void setInquilinos(List<Persona> inquilinos) {
		this.inquilinos = inquilinos;
	}

	public UnidadView toView() {
		EdificioView auxEdificio = edificio.toView();
		return new UnidadView(id, piso, numero, habitado, auxEdificio);
	}

	@Override
	public String toString() {
		return "Unidad [id=" + id + ", piso=" + piso + ", numero=" + numero + ", habitado=" + habitado + ", edificio="
				+ edificio.getCodigo() + "]";
	}

}
