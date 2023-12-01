package com.example.demo.views;

public class UnidadView {

	private int id;
	private String piso;
	private String numero;
	private boolean habitado;
	private EdificioView edificio;

	public UnidadView() {
	}

	public UnidadView(int id, String piso, String numero, boolean habitado, EdificioView edificio) {
		this.id = id;
		this.piso = piso;
		this.numero = numero;
		this.habitado = habitado;
		this.edificio = edificio;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPiso() {
		return piso;
	}

	public void setPiso(String piso) {
		this.piso = piso;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public boolean isHabitado() {
		return habitado;
	}

	public void setHabitado(boolean habitado) {
		this.habitado = habitado;
	}

	public EdificioView getEdificio() {
		return edificio;
	}

	public void setEdificio(EdificioView edificio) {
		this.edificio = edificio;
	}

	@Override
	public String toString() {
		return "UnidadView [id=" + id + ", piso=" + piso + ", numero=" + numero + ", habitado=" + habitado
				+ ", edificio=" + edificio.getCodigo() + "]";
	}

//	public String toString() {
//		return piso + " " + numero;
//	}

}
