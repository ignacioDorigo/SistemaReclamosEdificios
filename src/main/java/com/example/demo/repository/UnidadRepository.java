package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.modelo.Edificio;
import com.example.demo.modelo.Unidad;

public interface UnidadRepository extends JpaRepository<Unidad, Integer> {

	Optional<Unidad> findByEdificioAndPisoAndNumero(Edificio edificio, String piso, String numero);

}
