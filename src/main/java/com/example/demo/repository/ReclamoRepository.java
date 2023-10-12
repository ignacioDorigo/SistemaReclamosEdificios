package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Persona;
import com.example.demo.modelo.Reclamo;
import com.example.demo.modelo.Unidad;

import java.util.List;

public interface ReclamoRepository extends JpaRepository<Reclamo, Integer> {

	public List<Reclamo> findByUsuario(Persona usuario);

	public List<Reclamo> findByUnidad(Unidad unidad);

	public List<Reclamo> findByEdificio(Edificio edificio);

}
